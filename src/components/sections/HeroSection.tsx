import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onLearnMore: () => void;
  onContact: () => void;
}

export default function HeroSection({ onLearnMore, onContact }: HeroSectionProps) {
  return (
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
              <Button size="lg" onClick={onLearnMore} className="gap-2">
                <Icon name="BookOpen" size={20} />
                Узнать больше
              </Button>
              <Button size="lg" variant="outline" onClick={onContact} className="gap-2">
                <Icon name="Mail" size={20} />
                Контакты
              </Button>
            </div>

          </div>
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/7c66309a-8703-4a04-abc9-28e4db339271.jpg"
              alt="Логопедия"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
