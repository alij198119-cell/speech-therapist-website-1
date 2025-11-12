import { useState } from 'react';
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
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      url: 'https://youtu.be/z1ifl5WqGZI',
      title: 'Видео занятия - логопедическая работа',
      description: 'Фрагменты индивидуальных и групповых занятий с детьми',
      thumbnail: 'https://cdn.poehali.dev/files/fd50e6a0-e21b-4087-9565-ec1473dc88cd.png'
    }
  ];

  return (
    <>
      <section id="видео" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Видео материалы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Видео с занятий</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Посмотрите как проходят занятия в нашем детском саду
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card
                key={video.url}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={40} className="text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-xl mb-1">{video.title}</h3>
                      <p className="text-white/90 text-sm">{video.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-6xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
            >
              <Icon name="X" size={24} />
            </Button>

            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.url.split('/').pop()}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-white text-center mt-4 text-lg font-medium drop-shadow-lg">
              {selectedVideo.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
