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

  const mediaItems: MediaItem[] = [
    { url: 'https://cdn.poehali.dev/files/2497718e-2dca-4265-b59a-0ab57939c111.jpg', title: 'Индивидуальное занятие - дыхательные упражнения', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/17541b82-f7de-46f5-9d1f-1b836f4833a0.jpg', title: 'Индивидуальное занятие - артикуляция', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/8fc18b8c-cfd1-4025-b61f-879dddb4f6f4.png', title: 'Индивидуальное занятие - постановка звуков', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/72ef95cb-50a8-49df-ad6b-0480d5d9017b.jpg', title: 'Индивидуальное занятие - мелкая моторика', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/fd50e6a0-e21b-4087-9565-ec1473dc88cd.png', title: 'Групповое занятие - дыхательная гимнастика', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/4647050d-6685-43d2-8c04-7f78f389df1b.png', title: 'Групповое занятие - творческие задания', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/39275cd4-7300-455a-935e-552137b922d3.png', title: 'Групповое занятие - дыхательные упражнения', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/641ea729-6c8b-4ffd-961f-beef9e54799b.png', title: 'Индивидуальное занятие - творческие задания', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/0e3d339d-97e7-467e-8912-541928fcdb43.png', title: 'Индивидуальное занятие - звукопроизношение', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/1f8048de-3c66-46ad-a0c1-7569cad33900.png', title: 'Индивидуальное занятие - артикуляционная моторика', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/c689316a-87cf-4c83-818a-3860dc508433.png', title: 'Индивидуальное занятие - развитие речи', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/a7982f78-df5f-41fb-86c4-27e8fb38f5fe.jpg', title: 'Групповое занятие - игры с детьми', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/bec3c562-2b38-42c6-9f24-c2c062126a36.jpg', title: 'Индивидуальное занятие - работа с пособиями', type: 'image' }
  ];

  const currentIndex = selectedMedia ? mediaItems.findIndex(item => item.url === selectedMedia.url) : -1;

  const goToNext = () => {
    if (currentIndex >= 0 && currentIndex < mediaItems.length - 1) {
      setSelectedMedia(mediaItems[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedMedia(mediaItems[currentIndex - 1]);
    }
  };

  return (
    <>
      <section id="галерея" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши успехи</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея моментов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Фотографии с занятий, достижения детей и радостные моменты обучения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <Card 
                key={item.url}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" 
                style={{ animationDelay: `${index * 100}ms` }} 
                onClick={() => setSelectedMedia(item)}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{item.title}</p>
                  </div>
                </div>
              </Card>
            ))}
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
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
            >
              <Icon name="X" size={24} />
            </Button>

            {currentIndex > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
              >
                <Icon name="ChevronLeft" size={32} />
              </Button>
            )}

            {currentIndex < mediaItems.length - 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <Icon name="ChevronRight" size={32} />
              </Button>
            )}

            <img 
              src={selectedMedia.url} 
              alt={selectedMedia.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg font-medium drop-shadow-lg">
              {selectedMedia.title} ({currentIndex + 1} / {mediaItems.length})
            </p>
          </div>
        </div>
      )}
    </>
  );
}