import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ScheduleAndParentsSections() {
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
      <section id="родителям" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="animate-fade-in">
              <Badge className="mb-4">Родителям</Badge>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ответы на частые вопросы
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Все, что нужно знать о логопедических занятиях
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/fe4d664d-41ca-4cc1-9ecf-234d6bbc3948.jpg"
                  alt="Занятия с родителями"
                  className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
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