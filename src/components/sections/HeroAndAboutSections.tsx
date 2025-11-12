import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroAndAboutSectionsProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroAndAboutSections({ scrollToSection }: HeroAndAboutSectionsProps) {
  return (
    <>
      <section id="главная" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                Учитель-логопед
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Правильная речь - 
                <span className="text-primary"> залог успеха</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Помогаю детям обрести уверенность в общении через современные логопедические методики. 
                Индивидуальный подход к каждому ребенку.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('методики')} className="gap-2">
                  <Icon name="BookOpen" size={20} />
                  Узнать больше
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')} className="gap-2">
                  <Icon name="Mail" size={20} />
                  Контакты
                </Button>
              </div>

            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/a90962b5-53df-41b9-8768-877ac152c4e7.jpg"
                alt="Логопедия"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о логопеде" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <Badge className="mb-4">О логопеде</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Евсеева Елена Сергеевна</h2>
              <p className="text-lg text-muted-foreground mb-4">Учитель-логопед </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="GraduationCap" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Образование</h4>
                    <p className="text-muted-foreground">Высшее психолого-педагогическое образование</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1"></h4>
                    <p className="text-muted-foreground"></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Star" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1"></h4>
                    <p className="text-muted-foreground"></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://cdn.poehali.dev/files/2e32b223-7a25-4182-acb0-1125683c4148.jpg"
                  alt="Учитель-логопед"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="сертификаты" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Квалификация</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Сертификаты и дипломы
            </h2>
            <p className="text-lg text-muted-foreground">
              Постоянное повышение квалификации и профессиональный рост
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Award',
                title: 'Диплом о высшем образовании',
                description: 'Московский финансово-промышленный университет «Синергия»',
                delay: '0ms',
                image: 'https://cdn.poehali.dev/files/de89d564-90a6-4dd8-8e0e-498c100a7528.jpg'
              },
              {
                icon: 'FileCheck',
                title: 'Сертификат повышения квалификации',
                description: 'Современные методики коррекции речи',
                delay: '100ms',
                image: null
              },
              {
                icon: 'Medal',
                title: 'Дополнительные сертификаты',
                description: 'Участие в конференциях и семинарах',
                delay: '200ms',
                image: null
              }
            ].map((cert, index) => (
              <div key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up group cursor-pointer bg-card rounded-lg border shadow-sm" style={{ animationDelay: cert.delay }}>
                {cert.image ? (
                  <div className="relative h-80">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-6 text-white">
                      <h3 className="text-xl font-bold text-center mb-2">{cert.title}</h3>
                      <p className="text-white/90 text-center text-sm">{cert.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-80 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col items-center justify-center p-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={cert.icon} size={40} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground text-center text-sm">{cert.description}</p>
                    <Button variant="outline" className="mt-6 gap-2" size="sm">
                      <Icon name="Plus" size={16} />
                      Загрузить фото
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Нажмите на карточку, чтобы загрузить изображение вашего сертификата или диплома
            </p>
          </div>
        </div>
      </section>
    </>
  );
}