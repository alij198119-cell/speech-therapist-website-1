import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <>
      <section id="успехи" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши успехи</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея моментов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Фотографии с занятий, достижения детей и радостные моменты обучения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '100ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/ffc83f06-7eee-44dd-babb-85bbb06b4496.png', title: 'Индивидуальное занятие' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/ffc83f06-7eee-44dd-babb-85bbb06b4496.png"
                  alt="Индивидуальное занятие"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '200ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/ac917d4f-8fec-4a64-a984-20208037fed0.png', title: 'Групповые занятия' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/ac917d4f-8fec-4a64-a984-20208037fed0.png"
                  alt="Групповые занятия"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Групповые занятия</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '300ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/82aa36bd-ce65-478a-84ca-9f23e7dfec93.jpg', title: 'Мелкая моторика' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/82aa36bd-ce65-478a-84ca-9f23e7dfec93.jpg"
                  alt="Мелкая моторика"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Мелкая моторика</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '400ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/d28ee28f-aaf2-48a7-9b42-7f38b8c0ba8f.jpg', title: 'Артикуляционная гимнастика' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/d28ee28f-aaf2-48a7-9b42-7f38b8c0ba8f.jpg"
                  alt="Артикуляционная гимнастика"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Артикуляционная гимнастика</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '500ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/23b95f91-d8e5-4bcb-9be8-dffafcb17fa1.jpg', title: 'Логоритмика' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/23b95f91-d8e5-4bcb-9be8-dffafcb17fa1.jpg"
                  alt="Логоритмика"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Логоритмика</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={24} />
            </Button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg font-medium">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
