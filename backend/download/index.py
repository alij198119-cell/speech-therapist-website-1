import json
import base64
from typing import Dict, Any
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.pdfgen import canvas
from io import BytesIO

def generate_pdf(material_id: str, material: Dict[str, Any]) -> bytes:
    '''Generate PDF content for the material'''
    buffer = BytesIO()
    pdf = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4
    
    # Title
    pdf.setFont("Helvetica-Bold", 24)
    pdf.drawString(2*cm, height - 3*cm, "Logopediya v DOU")
    
    # Description
    pdf.setFont("Helvetica", 12)
    pdf.drawString(2*cm, height - 5*cm, material['description'])
    
    # Content placeholder
    pdf.setFont("Helvetica", 10)
    y_position = height - 7*cm
    
    content_lines = [
        "Demo PDF file.",
        "",
        "Full methodological material will be placed here:",
        f"- {material['name']}",
        "",
        "Contact the speech therapist through the 'Contacts' section",
        "on the website to get the full version.",
        "",
        "Thank you for your interest in our materials!",
    ]
    
    for line in content_lines:
        pdf.drawString(2*cm, y_position, line)
        y_position -= 0.6*cm
    
    # Footer
    pdf.setFont("Helvetica-Oblique", 8)
    pdf.drawString(2*cm, 2*cm, "Logopediya v DOU | https://poehali.dev")
    
    pdf.save()
    buffer.seek(0)
    return buffer.read()

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Generate and download educational materials as PDF files
    Args: event with httpMethod and queryStringParameters (material_id)
    Returns: HTTP response with PDF file or error
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    params = event.get('queryStringParameters', {})
    material_id = params.get('id', '')
    
    # Material database
    materials = {
        'articulation': {
            'name': 'Артикуляционная гимнастика',
            'filename': 'artikulyacionnaya-gimnastika.pdf',
            'size': '2.4 MB',
            'description': 'Комплекс упражнений для развития речевого аппарата'
        },
        'games': {
            'name': 'Логопедические игры',
            'filename': 'logopedicheskie-igry.pdf',
            'size': '3.8 MB',
            'description': '30+ игр для развития речи детей 3-7 лет'
        },
        'tongue-twisters': {
            'name': 'Чистоговорки и скороговорки',
            'filename': 'chistogovorki-skorogovorki.pdf',
            'size': '1.2 MB',
            'description': 'Подборка для автоматизации всех звуков'
        },
        'workbooks': {
            'name': 'Рабочие тетради',
            'filename': 'rabochie-tetradi.pdf',
            'size': '4.5 MB',
            'description': 'Задания для развития фонематического слуха'
        },
        'breathing': {
            'name': 'Дыхательная гимнастика',
            'filename': 'dykhatelnaya-gimnastika.pdf',
            'size': '1.8 MB',
            'description': 'Упражнения для развития речевого дыхания'
        }
    }
    
    if not material_id:
        # Return list of all materials
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'materials': materials,
                'total': len(materials)
            })
        }
    
    if material_id not in materials:
        return {
            'statusCode': 404,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Material not found'})
        }
    
    material = materials[material_id]
    
    # Generate PDF file
    pdf_content = generate_pdf(material_id, material)
    pdf_base64 = base64.b64encode(pdf_content).decode('utf-8')
    
    # Return PDF file as base64
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/pdf',
            'Content-Disposition': f'attachment; filename="{material["filename"]}"',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': 'Content-Disposition'
        },
        'isBase64Encoded': True,
        'body': pdf_base64
    }