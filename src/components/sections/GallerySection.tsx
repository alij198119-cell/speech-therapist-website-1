import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type MediaItem = {
  url: string;
  title: string;
  type: 'image' | 'video';
  thumbnail?: string;
};

export default function GallerySection() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <>
      <section id="успехи" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши успехи</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея моментов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Фотографии и видео с занятий, достижения детей и радостные моменты обучения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '100ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/2497718e-2dca-4265-b59a-0ab57939c111.jpg', title: 'Индивидуальное занятие - дыхательные упражнения', type: 'image' })}>
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

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '200ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/17541b82-f7de-46f5-9d1f-1b836f4833a0.jpg', title: 'Индивидуальное занятие - артикуляция', type: 'image' })}>
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

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '300ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/8fc18b8c-cfd1-4025-b61f-879dddb4f6f4.png', title: 'Индивидуальное занятие - постановка звуков', type: 'image' })}>
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

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '400ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/72ef95cb-50a8-49df-ad6b-0480d5d9017b.jpg', title: 'Индивидуальное занятие - мелкая моторика', type: 'image' })}>
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

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '500ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/fd50e6a0-e21b-4087-9565-ec1473dc88cd.png', title: 'Групповое занятие - дыхательная гимнастика', type: 'image' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/fd50e6a0-e21b-4087-9565-ec1473dc88cd.png"
                  alt="Групповое занятие - дыхательная гимнастика"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Групповое занятие - дыхательная гимнастика</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '600ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/4647050d-6685-43d2-8c04-7f78f389df1b.png', title: 'Групповое занятие - творческие задания', type: 'image' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/4647050d-6685-43d2-8c04-7f78f389df1b.png"
                  alt="Групповое занятие - творческие задания"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Групповое занятие - творческие задания</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '700ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/39275cd4-7300-455a-935e-552137b922d3.png', title: 'Групповое занятие - дыхательные упражнения', type: 'image' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/39275cd4-7300-455a-935e-552137b922d3.png"
                  alt="Групповое занятие - дыхательные упражнения"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Групповое занятие - дыхательные упражнения</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '800ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/641ea729-6c8b-4ffd-961f-beef9e54799b.png', title: 'Индивидуальное занятие - творческие задания', type: 'image' })}>
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

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '900ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/0e3d339d-97e7-467e-8912-541928fcdb43.png', title: 'Индивидуальное занятие - звукопроизношение', type: 'image' })}>
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

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '1000ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/1f8048de-3c66-46ad-a0c1-7569cad33900.png', title: 'Индивидуальное занятие - артикуляционная моторика', type: 'image' })}>
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

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '1100ms' }} onClick={() => setSelectedMedia({ url: 'https://cdn.poehali.dev/files/c689316a-87cf-4c83-818a-3860dc508433.png', title: 'Индивидуальное занятие - развитие речи', type: 'image' })}>
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

      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-5xl w-full">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedMedia(null)}
            >
              <Icon name="X" size={24} />
            </Button>
            {selectedMedia.type === 'image' ? (
              <img 
                src={selectedMedia.url} 
                alt={selectedMedia.title}
                className="w-full h-auto rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video 
                src={selectedMedia.url} 
                controls
                autoPlay
                className="w-full h-auto rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <p className="text-white text-center mt-4 text-lg font-medium">{selectedMedia.title}</p>
          </div>
        </div>
      )}
    </>
  );
}