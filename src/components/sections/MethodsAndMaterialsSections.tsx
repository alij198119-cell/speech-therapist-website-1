import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface MethodsAndMaterialsSectionsProps {
  handleDownload: (materialId: string, materialName: string) => void;
}

export default function MethodsAndMaterialsSections({ handleDownload }: MethodsAndMaterialsSectionsProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    } else {
      alert('Пожалуйста, введите корректный email');
    }
  };
  const methods = [
    {
      title: 'Артикуляционная гимнастика',
      description: 'Упражнения для укрепления мышц речевого аппарата',
      icon: 'Smile',
      color: 'bg-primary/10 text-primary'
    },
    {
      title: 'Дыхательные упражнения',
      description: 'Развитие правильного речевого дыхания',
      icon: 'Wind',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      title: 'Звукопроизношение',
      description: 'Постановка и автоматизация звуков',
      icon: 'Music',
      color: 'bg-accent/10 text-accent'
    },
    {
      title: 'Развитие фонематического слуха',
      description: 'Умение различать звуки речи',
      icon: 'Ear',
      color: 'bg-primary/10 text-primary'
    },
    {
      title: 'Мелкая моторика',
      description: 'Пальчиковые игры и упражнения',
      icon: 'Hand',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      title: 'Логоритмика',
      description: 'Речь + движение + музыка',
      icon: 'Music2',
      color: 'bg-accent/10 text-accent'
    }
  ];

  return (
    <>
      <section id="методики" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши методики</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              Комплексный подход к развитию речи
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Используем проверенные методики и современные игровые техники
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {methods.map((method, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center mb-4`}>
                    <Icon name={method.icon} size={28} />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">{method.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            <img
              src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/d75e3ab7-fb1d-4ad6-bdac-9fd675e73e83.jpg"
              alt="Методики работы"
              className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 md:p-6 lg:p-8 text-white">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Игровой формат занятий</h3>
                <p className="text-lg text-white/90">Дети учатся легко и с удовольствием</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="материалы" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Полезные материалы</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              Скачайте бесплатно
            </h2>
            <p className="text-lg text-muted-foreground">
              Методические пособия и упражнения для занятий дома
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Артикуляционная гимнастика</CardTitle>
                    <CardDescription className="mb-4">
                      Комплекс упражнений для развития речевого аппарата.
                    </CardDescription>
                    <div className="space-y-2">
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/6xuKhLWwu8Ez5g" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 1
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/uMDyWrbOYEs7ag" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 2
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/veAJXTV_3Nt8sg" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 3
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="BookOpen" size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Логопедические игры</CardTitle>
                    <CardDescription className="mb-4">
                      30+ игр для развития речи детей 3-7 лет. Можно играть всей семьей.
                    </CardDescription>
                    <div className="space-y-2">
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/EPyGsKGy9Fq7KA" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 1
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/tfzZHIOswmyj2g" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 2
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/2bwlcN0Zr1w_mQ" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 3
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Music" size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Чистоговорки и скороговорки</CardTitle>
                    <CardDescription className="mb-4">
                      Подборка для автоматизации всех звуков русского языка.
                    </CardDescription>
                    <div className="space-y-2">
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/tyBZcO_Tlu8n4Q" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 1
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/ixb-01JZSxnMCQ" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 2
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/eb9SudmhLkQKnQ" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 3
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Wind" size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Дыхательная гимнастика</CardTitle>
                    <CardDescription className="mb-4">
                      Упражнения для развития речевого дыхания с пошаговыми инструкциями.
                    </CardDescription>
                    <div className="space-y-2">
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/iFHcxA9wL6XlAA" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 1
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/ylRsDvvijpj6Xw" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 2
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2 w-full justify-start text-sm" asChild>
                        <a href="https://disk.yandex.ru/i/4Nyh2zf6UJdRvw" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={16} />
                          Материал 3
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <Card className="mt-8 bg-gradient-to-r from-primary to-secondary text-white animate-fade-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Bell" size={32} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Получайте новые материалы первыми</h3>
                  <p className="text-white/90 mb-4">
                    Регулярно добавляю новые пособия и упражнения. Следите за обновлениями!
                  </p>
                  {!isSubscribed && (
                    <div className="flex gap-2 max-w-md mx-auto md:mx-0">
                      <Input
                        type="email"
                        placeholder="Введите ваш email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white text-foreground"
                        onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                      />
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        className="gap-2 flex-shrink-0"
                        onClick={handleSubscribe}
                      >
                        <Icon name="Mail" size={20} />
                        Подписаться
                      </Button>
                    </div>
                  )}
                  {isSubscribed && (
                    <div className="flex items-center gap-2 justify-center md:justify-start text-white">
                      <Icon name="CheckCircle" size={24} />
                      <span className="font-semibold">Спасибо! Вы подписаны на обновления</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}