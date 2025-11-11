import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const BACKEND_URL = 'https://functions.poehali.dev/4a75476f-857b-4505-813c-ced5409e0204';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const handleDownload = async (materialId: string, materialName: string) => {
    try {
      const response = await fetch(`${BACKEND_URL}?id=${materialId}`);
      
      if (response.ok) {
        const blob = await response.blob();
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${materialId}.pdf`;
        document.body.appendChild(a);
        a.click();
        
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert('Ошибка при скачивании материала');
      }
    } catch (error) {
      alert('Произошла ошибка. Попробуйте позже.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">🗣️</span>
              </div>
              <span className="font-bold text-xl text-foreground">Логопедия в ДОУ</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О логопеде', 'Методики', 'Успехи', 'Материалы', 'Расписание', 'Родителям', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

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
                src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/7c66309a-8703-4a04-abc9-28e4db339271.jpg"
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
                    <p className="text-muted-foreground">Постоянно совершенствуюсь, прохожу курсы повышения квалификации</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Heart" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Подход</h4>
                    <p className="text-muted-foreground">Индивидуальный подход к каждому ребенку, игровая форма занятий</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/a16b57d3-6cf1-47dd-87c3-7f81f9c5a8e9.jpg"
                alt="Евсеева Елена Сергеевна"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

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
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon name="Smile" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Артикуляционная гимнастика</h3>
              <p className="text-muted-foreground">Упражнения для укрепления мышц речевого аппарата</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <Icon name="Wind" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Дыхательные упражнения</h3>
              <p className="text-muted-foreground">Развитие правильного речевого дыхания</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Icon name="Music" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Звукопроизношение</h3>
              <p className="text-muted-foreground">Постановка и автоматизация звуков</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon name="Ear" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Развитие фонематического слуха</h3>
              <p className="text-muted-foreground">Умение различать звуки речи</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <Icon name="Hand" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Мелкая моторика</h3>
              <p className="text-muted-foreground">Пальчиковые игры и упражнения</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '500ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Icon name="Music2" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Логоритмика</h3>
              <p className="text-muted-foreground">Речь + движение + музыка</p>
            </Card>
          </div>
        </div>
      </section>
      <section id="успехи" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши успехи</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея моментов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Фотографии с занятий, достижения детей и радостные моменты обучения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '100ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/ffc83f06-7eee-44dd-babb-85bbb06b4496.png', title: 'Индивидуальное занятие' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/ffc83f06-7eee-44dd-babb-85bbb06b4496.png"
                  alt="Индивидуальное занятие"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Индивидуальное занятие</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '200ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/files/ac917d4f-8fec-4a64-a984-20208037fed0.png', title: 'Групповые занятия' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/ac917d4f-8fec-4a64-a984-20208037fed0.png"
                  alt="Групповые занятия"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Групповые занятия</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '300ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/82aa36bd-ce65-478a-84ca-9f23e7dfec93.jpg', title: 'Мелкая моторика' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/82aa36bd-ce65-478a-84ca-9f23e7dfec93.jpg"
                  alt="Мелкая моторика"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Мелкая моторика</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '400ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/d28ee28f-aaf2-48a7-9b42-7f38b8c0ba8f.jpg', title: 'Артикуляционная гимнастика' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/d28ee28f-aaf2-48a7-9b42-7f38b8c0ba8f.jpg"
                  alt="Артикуляционная гимнастика"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Артикуляционная гимнастика</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" style={{ animationDelay: '500ms' }} onClick={() => setSelectedImage({ url: 'https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/23b95f91-d8e5-4bcb-9be8-dffafcb17fa1.jpg', title: 'Логоритмика' })}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/cb36eb85-ae57-4cae-b98f-fed5b756a9f6/files/23b95f91-d8e5-4bcb-9be8-dffafcb17fa1.jpg"
                  alt="Логоритмика"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Логоритмика</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={24} />
            </Button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg font-medium">{selectedImage.title}</p>
          </div>
        </div>
      )}

      <section id="материалы" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Методические материалы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Полезные материалы</h2>
            <p className="text-lg text-muted-foreground">
              Скачайте материалы для домашних занятий и игр с детьми
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="BookOpen" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Артикуляционная гимнастика</CardTitle>
                    <CardDescription>Комплекс упражнений для развития речевого аппарата с картинками</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button onClick={() => handleDownload('artikulyacionnaya-gimnastika', 'Артикуляционная гимнастика')} className="w-full gap-2">
                  <Icon name="Download" size={18} />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wind" size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Дыхательные упражнения</CardTitle>
                    <CardDescription>Игры и упражнения для развития правильного речевого дыхания</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button onClick={() => handleDownload('dyhanie', 'Дыхательные упражнения')} variant="secondary" className="w-full gap-2">
                  <Icon name="Download" size={18} />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Hand" size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Пальчиковые игры</CardTitle>
                    <CardDescription>Упражнения для развития мелкой моторики и координации</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button onClick={() => handleDownload('palchikovye-igry', 'Пальчиковые игры')} variant="outline" className="w-full gap-2">
                  <Icon name="Download" size={18} />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Music" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">Автоматизация звуков</CardTitle>
                    <CardDescription>Карточки и задания для закрепления правильного произношения</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button onClick={() => handleDownload('avtomatizaciya-zvukov', 'Автоматизация звуков')} className="w-full gap-2">
                  <Icon name="Download" size={18} />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="расписание" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Расписание</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">График работы</h2>
            <p className="text-lg text-muted-foreground">
              Индивидуальные и групповые занятия по предварительной записи
            </p>
          </div>
          <Card className="overflow-hidden animate-slide-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">День недели</th>
                    <th className="px-6 py-4 text-left font-semibold">Время</th>
                    <th className="px-6 py-4 text-left font-semibold">Формат занятий</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {schedule.map((item, index) => (
                    <tr key={index} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-medium">{item.day}</td>
                      <td className="px-6 py-4 text-muted-foreground">{item.time}</td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">{item.groups}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="mt-8 text-center">
            <Button size="lg" onClick={() => scrollToSection('контакты')} className="gap-2">
              <Icon name="Calendar" size={20} />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="родителям" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Родителям</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на самые популярные вопросы о логопедических занятиях
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4 animate-slide-up">
            {parentsInfo.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь со мной</h2>
            <p className="text-lg text-muted-foreground">
              Готова ответить на все ваши вопросы и записать на консультацию
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a href="tel:+79169604222" className="text-primary hover:underline">+7 916 960-42-22</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:lesnik@mail.ru" className="text-primary hover:underline break-all">lesnik@mail.ru</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">МАДОУ детский сад "Звездочка"</p>
                    <p className="text-sm text-muted-foreground mt-1">142172, Московская область</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 17:00</p>
                    <p className="text-sm text-muted-foreground mt-1">Запись по предварительной договоренности</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Евсеева Елена Сергеевна. Учитель-логопед МАДОУ детский сад "Звездочка"</p>
          <p className="mt-2 text-sm">Помогаю детям обрести уверенность в общении</p>
        </div>
      </footer>
    </div>
  );
}