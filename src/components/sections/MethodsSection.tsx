import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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

export default function MethodsSection() {
  return (
    <section id="методики" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4">Методики работы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Использую проверенные методики и современные подходы для эффективной коррекции речи
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center mb-4`}>
                <Icon name={method.icon as any} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-muted-foreground">{method.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
