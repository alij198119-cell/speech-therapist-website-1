import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type VideoItem = {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
};

export default function VideoSection() {
  const openVideo = (video: VideoItem) => {
    window.open(video.url, '_blank');
  };

  const videos: VideoItem[] = [
    {
      url: 'https://youtu.be/z1ifl5WqGZI',
      title: 'Видео занятия - логопедическая работа',
      description: 'Фрагменты индивидуальных и групповых занятий с детьми',
      thumbnail: 'https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/3802d00f-edb8-4383-b3f2-2fa5c71291a9.jpg'
    }
  ];

  return (
    <>
      <section id="видео" className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Icon name="Video" size={16} className="mr-1" />
              Видео материалы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Видео с занятий</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Посмотрите как проходят занятия в нашем детском саду
            </p>
          </div>
          
          <div className="relative animate-slide-up">
            {videos.map((video, index) => (
              <Card
                key={video.url}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer group border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-muted/20"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openVideo(video)}
              >
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-white to-white/90 flex items-center justify-center group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 shadow-2xl">
                        <Icon name="Play" size={48} className="text-primary ml-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                            <Icon name="Video" size={20} className="text-white" />
                          </div>
                          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                            Видеообзор
                          </Badge>
                        </div>
                        <h3 className="font-bold text-2xl mb-2 text-white drop-shadow-lg">
                          {video.title}
                        </h3>
                        <p className="text-white/90 text-base drop-shadow-md flex items-center gap-2">
                          <Icon name="Info" size={16} />
                          {video.description}
                        </p>
                      </div>
                      <Button 
                        variant="secondary" 
                        size="lg"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 gap-2 group-hover:scale-110 transition-transform"
                      >
                        <Icon name="Play" size={20} />
                        Смотреть
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}