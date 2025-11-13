import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ScheduleAndParentsSections() {
  const schedule = [
    { day: 'Понедельник', time: '13:00 - 17:00', groups: 'Индивидуальные занятия' },
    { day: 'Вторник', time: '9:00 - 13:00', groups: 'Групповые и индивидуальные занятия' },
    { day: 'Среда', time: '9:00 - 13:00', groups: 'Групповые и индивидуальные занятия' },
    { day: 'Четверг', time: '9:00 - 13:00', groups: 'Групповые и индивидуальные занятия' },
    { day: 'Пятница', time: '13:00 - 17:00', groups: 'Индивидуальные занятия' }
  ];

  const parentsInfo = [
    {
      question: 'Когда нужно обратиться к логопеду?',
      answer: 'Если в 3 года ребенок не говорит фразами, в 4-5 лет искажает звуки, заменяет их или пропускает, есть трудности с пониманием речи.'
    },
    {
      question: 'Как подготовиться к занятию?',
      answer: 'Выспаться, поесть за 1-2 часа до занятия, взять с собой хорошее настроение! Важно, чтобы ребенок был спокоен и готов к занятию.'
    },
    {
      question: 'Как закреплять материал дома?',
      answer: 'Ежедневно выполняйте домашние задания по 10-15 минут. Делайте артикуляционную гимнастику перед зеркалом, повторяйте новые звуки в играх.'
    },
    {
      question: 'Как долго длится коррекция?',
      answer: 'Зависит от сложности нарушения. В среднем от 3 месяцев до 1-2 лет. Регулярность занятий и домашняя работа ускоряют процесс.'
    }
  ];

  return (
    <>
      <section id="расписание" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Расписание</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              График работы
            </h2>
            <p className="text-lg text-muted-foreground">
              Занятия проходят ежедневно по группам и индивидуально
            </p>
          </div>

          <Card className="shadow-lg animate-slide-up">
            <CardContent className="p-0">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/50 transition-colors ${
                    index !== schedule.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{item.day}</div>
                      <div className="text-muted-foreground">{item.groups}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span className="font-medium">{item.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-primary/5 rounded-2xl border-2 border-primary/20 animate-fade-in">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Info" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Важно знать</h4>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <Icon name="User" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span><strong></strong> 20 минут, 2 раза в неделю</span>
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <Icon name="Users" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Групповые занятия:</strong> 30 минут, 3 раза в неделю</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="родителям" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="animate-fade-in">
              <Badge className="mb-4">Родителям</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ответы на частые вопросы
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Все, что нужно знать о логопедических занятиях
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/fe4d664d-41ca-4cc1-9ecf-234d6bbc3948.jpg"
                  alt="Занятия с родителями"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="animate-slide-up">
              <Accordion type="single" collapsible className="space-y-4">
                {parentsInfo.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="bg-white rounded-lg px-6 border-2 hover:border-primary/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}