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
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '100ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/2497718e-2dca-4265-b59a-0ab57939c111.jpg', title: 'Индивидуальное занятие - дыхательные упражнения' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/2497718e-2dca-4265-b59a-0ab57939c111.jpg"
                  alt="Индивидуальное занятие - дыхательные упражнения"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие - дыхательные упражнения</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '200ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/17541b82-f7de-46f5-9d1f-1b836f4833a0.jpg', title: 'Индивидуальное занятие - артикуляция' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/17541b82-f7de-46f5-9d1f-1b836f4833a0.jpg"
                  alt="Индивидуальное занятие - артикуляция"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие - артикуляция</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '300ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/8fc18b8c-cfd1-4025-b61f-879dddb4f6f4.png', title: 'Индивидуальное занятие - постановка звуков' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/8fc18b8c-cfd1-4025-b61f-879dddb4f6f4.png"
                  alt="Индивидуальное занятие - постановка звуков"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие - постановка звуков</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '400ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/72ef95cb-50a8-49df-ad6b-0480d5d9017b.jpg', title: 'Индивидуальное занятие - мелкая моторика' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/72ef95cb-50a8-49df-ad6b-0480d5d9017b.jpg"
                  alt="Индивидуальное занятие - мелкая моторика"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие - мелкая моторика</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '500ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/7097cce0-929a-4b91-8008-b343f76875d8.png', title: 'Групповые занятия' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/7097cce0-929a-4b91-8008-b343f76875d8.png"
                  alt="Групповые занятия"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Групповые занятия</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '600ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/641ea729-6c8b-4ffd-961f-beef9e54799b.png', title: 'Индивидуальное занятие - творческие задания' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/641ea729-6c8b-4ffd-961f-beef9e54799b.png"
                  alt="Индивидуальное занятие - творческие задания"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие - творческие задания</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '700ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/0e3d339d-97e7-467e-8912-541928fcdb43.png', title: 'Индивидуальное занятие - звукопроизношение' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/0e3d339d-97e7-467e-8912-541928fcdb43.png"
                  alt="Индивидуальное занятие - звукопроизношение"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие - звукопроизношение</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '800ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/1f8048de-3c66-46ad-a0c1-7569cad33900.png', title: 'Индивидуальное занятие - артикуляционная моторика' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/1f8048de-3c66-46ad-a0c1-7569cad33900.png"
                  alt="Индивидуальное занятие - артикуляционная моторика"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие - артикуляционная моторика</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '900ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/c689316a-87cf-4c83-818a-3860dc508433.png', title: 'Индивидуальное занятие - развитие речи' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/c689316a-87cf-4c83-818a-3860dc508433.png"
                  alt="Индивидуальное занятие - развитие речи"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие - развитие речи</p>
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