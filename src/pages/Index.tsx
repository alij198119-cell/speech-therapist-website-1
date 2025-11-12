import { useState } from 'react';
import GallerySection from '@/components/sections/GallerySection';
import VideoSection from '@/components/sections/VideoSection';
import HeroAndAboutSections from '@/components/sections/HeroAndAboutSections';
import MethodsAndMaterialsSections from '@/components/sections/MethodsAndMaterialsSections';
import ScheduleAndParentsSections from '@/components/sections/ScheduleAndParentsSections';
import ContactsSection from '@/components/sections/ContactsSection';

const BACKEND_URL = 'https://functions.poehali.dev/4a75476f-857b-4505-813c-ced5409e0204';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const handleDownload = async (materialId: string, materialName: string) => {
    try {
      const response = await fetch(`${BACKEND_URL}?id=${materialId}`);
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${materialName}.pdf`;
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

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">🗣️</span>
              </div>
              <span className="font-bold text-xl text-foreground">Логопед в ДОУ №16 рп. Лесогорск</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О логопеде', 'Методики', 'Галерея', 'Видео', 'Материалы', 'Расписание', 'Родителям', 'Контакты'].map((item) => (
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

      <HeroAndAboutSections scrollToSection={scrollToSection} />

      <MethodsAndMaterialsSections handleDownload={handleDownload} />

      <GallerySection />

      <VideoSection />

      <ScheduleAndParentsSections />

      <ContactsSection />

      <footer className="py-8 px-4 border-t bg-muted/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-xl">🗣️</span>
            </div>
            <span className="font-semibold text-foreground">Логопед в ДОУ №16 рп. Лесогорск</span>
          </div>
          <p className="text-sm">
            © 2025 Евсеева Е.С. Помогаем детям говорить правильно и красиво.
          </p>
        </div>
      </footer>
    </div>
  );
}
