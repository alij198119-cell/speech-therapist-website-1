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
  const [currentCategory, setCurrentCategory] = useState<'individual' | 'group' | null>(null);

  const individualItems: MediaItem[] = [
    { url: 'https://cdn.poehali.dev/files/2497718e-2dca-4265-b59a-0ab57939c111.jpg', title: 'Индивидуальное занятие - дыхательные упражнения', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/17541b82-f7de-46f5-9d1f-1b836f4833a0.jpg', title: 'Индивидуальное занятие - артикуляция', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/8fc18b8c-cfd1-4025-b61f-879dddb4f6f4.png', title: 'Индивидуальное занятие - постановка звуков', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/72ef95cb-50a8-49df-ad6b-0480d5d9017b.jpg', title: 'Индивидуальное занятие - мелкая моторика', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/641ea729-6c8b-4ffd-961f-beef9e54799b.png', title: 'Индивидуальное занятие - творческие задания', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/0e3d339d-97e7-467e-8912-541928fcdb43.png', title: 'Индивидуальное занятие - звукопроизношение', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/1f8048de-3c66-46ad-a0c1-7569cad33900.png', title: 'Индивидуальное занятие - артикуляционная моторика', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/c689316a-87cf-4c83-818a-3860dc508433.png', title: 'Индивидуальное занятие - развитие речи', type: 'image' }
  ];

  const groupItems: MediaItem[] = [
    { url: 'https://cdn.poehali.dev/files/fd50e6a0-e21b-4087-9565-ec1473dc88cd.png', title: 'Групповое занятие - дыхательная гимнастика', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/4647050d-6685-43d2-8c04-7f78f389df1b.png', title: 'Групповое занятие - творческие задания', type: 'image' },
    { url: 'https://cdn.poehali.dev/files/39275cd4-7300-455a-935e-552137b922d3.png', title: 'Групповое занятие - дыхательные упражнения', type: 'image' }
  ];

  const allItems = currentCategory === 'individual' ? individualItems : currentCategory === 'group' ? groupItems : [];
  const currentIndex = selectedMedia ? allItems.findIndex(item => item.url === selectedMedia.url) : -1;

  const goToNext = () => {
    if (currentIndex >= 0 && currentIndex < allItems.length - 1) {
      setSelectedMedia(allItems[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedMedia(allItems[currentIndex - 1]);
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

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setCurrentCategory('individual')}
              className={`
                group relative px-8 py-4 rounded-2xl font-semibold text-base
                transition-all duration-300 ease-out
                ${currentCategory === 'individual' 
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                  : 'bg-background border-2 border-border hover:border-primary/50 hover:shadow-md hover:scale-102'}
              `}
            >
              <div className="flex items-center gap-2.5">
                <Icon name="User" size={22} className={currentCategory === 'individual' ? '' : 'group-hover:scale-110 transition-transform'} />
                <span>Индивидуальные занятия</span>
                <Badge 
                  variant={currentCategory === 'individual' ? 'secondary' : 'outline'}
                  className="ml-1 px-2.5 py-0.5"
                >
                  {individualItems.length}
                </Badge>
              </div>
              {currentCategory === 'individual' && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-primary rotate-45" />
              )}
            </button>
            
            <button
              onClick={() => setCurrentCategory('group')}
              className={`
                group relative px-8 py-4 rounded-2xl font-semibold text-base
                transition-all duration-300 ease-out
                ${currentCategory === 'group' 
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                  : 'bg-background border-2 border-border hover:border-primary/50 hover:shadow-md hover:scale-102'}
              `}
            >
              <div className="flex items-center gap-2.5">
                <Icon name="Users" size={22} className={currentCategory === 'group' ? '' : 'group-hover:scale-110 transition-transform'} />
                <span>Групповые занятия</span>
                <Badge 
                  variant={currentCategory === 'group' ? 'secondary' : 'outline'}
                  className="ml-1 px-2.5 py-0.5"
                >
                  {groupItems.length}
                </Badge>
              </div>
              {currentCategory === 'group' && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-primary rotate-45" />
              )}
            </button>
          </div>

          {currentCategory && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allItems.map((item, index) => (
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
                </div>
              </Card>
              ))}
            </div>
          )}
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

            {currentIndex < allItems.length - 1 && (
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
              {selectedMedia.title} ({currentIndex + 1} / {allItems.length})
            </p>
          </div>
        </div>
      )}
    </>
  );
}