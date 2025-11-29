import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <section id="контакты" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4">Контакты</Badge>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Свяжитесь со мной
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon name="Phone" size={24} />
              </div>
              <CardTitle>Телефон</CardTitle>
              <CardDescription className="text-base">+7 (950) 136-60-13</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <Icon name="Mail" size={24} />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription className="text-base">alij1981@mail.ru</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Icon name="MapPin" size={24} />
              </div>
              <CardTitle>Адрес</CardTitle>
              <CardDescription className="text-base">Иркутская область, Чунский район, р.п.Лесогорск, ул. Мелиораторов, 27 МДОБУ "Детский сад № 16 р.п.Лесогорск"</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} />
              </div>
              <CardTitle>Часы работы</CardTitle>
              <CardDescription className="text-base">
                Пн, Пт: 13:00 - 17:00
                <br />
                Вт, Ср, Чт: 9:00 - 13:00
                <br />
                Сб-Вс: Выходной
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}