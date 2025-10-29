import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showDksDetails, setShowDksDetails] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary border-b border-border backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary-foreground">ООО Феникс</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-primary-foreground hover:text-primary'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('equipment')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'equipment' ? 'text-primary' : 'text-primary-foreground hover:text-primary'
                }`}
              >
                Оборудование
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-primary-foreground hover:text-primary'
                }`}
              >
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} size="sm">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              Профессиональное промышленное оборудование
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Надежные решения для вашего бизнеса. Поставки качественного оборудования для производственных предприятий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" onClick={() => scrollToSection('equipment')}>
                <Icon name="Package" className="mr-2" size={20} />
                Каталог оборудования
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работаем только с проверенными производителями. Все оборудование сертифицировано
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <CardTitle>Оперативность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Быстрая обработка заказов и доставка по всей России в кратчайшие сроки
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <CardTitle>Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Профессиональные консультации и техническая поддержка на всех этапах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наше оборудование</h2>
            <p className="text-xl text-muted-foreground">
              Широкий ассортимент промышленного оборудования для различных отраслей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/174139f1-2315-4100-80b2-2b1139ba1907/files/6dd56be1-3258-414e-9ce3-b46f626e0b20.jpg" 
                  alt="Решетки-дробилки" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Решетки-дробилки</CardTitle>
                <CardDescription>Оборудование для очистки сточных вод</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Канализационные дробилки и решетки для измельчения твердых включений
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowDksDetails(true)}
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/174139f1-2315-4100-80b2-2b1139ba1907/files/f87b6c82-0021-45db-8e5d-e7e901dd9219.jpg" 
                  alt="Насосное оборудование" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Насосное оборудование</CardTitle>
                <CardDescription>Промышленные насосы и системы перекачки</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Центробежные, винтовые и поршневые насосы для любых задач
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/174139f1-2315-4100-80b2-2b1139ba1907/files/243f554a-ffe2-496a-b54e-00e693501ca6.jpg" 
                  alt="Электрооборудование" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Электрооборудование</CardTitle>
                <CardDescription>Силовые и управляющие системы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Трансформаторы, распределительные щиты, кабельная продукция
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-scale">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Gauge" className="text-primary" size={64} />
              </div>
              <CardHeader>
                <CardTitle>КИПиА</CardTitle>
                <CardDescription>Контрольно-измерительные приборы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Датчики, манометры, расходомеры для промышленной автоматизации
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-scale">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Wind" className="text-primary" size={64} />
              </div>
              <CardHeader>
                <CardTitle>Вентиляция</CardTitle>
                <CardDescription>Системы промышленной вентиляции</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Вентиляторы, воздуховоды, фильтровальное оборудование
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-scale">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Wrench" className="text-primary" size={64} />
              </div>
              <CardHeader>
                <CardTitle>Запасные части</CardTitle>
                <CardDescription>Комплектующие для оборудования</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Широкий ассортимент запчастей и расходных материалов
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Отправить заявку</CardTitle>
                  <CardDescription>Заполните форму и мы перезвоним вам</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Опишите ваши потребности" rows={4} />
                    </div>
                    <Button type="submit" className="w-full">
                      <Icon name="Send" className="mr-2" size={18} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Адрес</CardTitle>
                        <CardDescription>г. Москва, ул. Промышленная, д. 15</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Телефон</CardTitle>
                        <CardDescription>+7 (495) 123-45-67</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Mail" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email</CardTitle>
                        <CardDescription>info@fenix-equipment.ru</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Clock" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Режим работы</CardTitle>
                        <CardDescription>Пн-Пт: 9:00 - 18:00</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-primary" size={28} />
                <span className="text-xl font-bold">ООО Феникс</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Надежный поставщик промышленного оборудования с 2010 года
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                    Главная
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('equipment')} className="hover:text-primary transition-colors">
                    Оборудование
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@fenix-equipment.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            © 2024 ООО Феникс. Все права защищены.
          </div>
        </div>
      </footer>

      <Dialog open={showDksDetails} onOpenChange={setShowDksDetails}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl">Решетки-дробилки</DialogTitle>
            <DialogDescription>Оборудование для очистки сточных вод и измельчения твердых включений</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/174139f1-2315-4100-80b2-2b1139ba1907/files/6dd56be1-3258-414e-9ce3-b46f626e0b20.jpg" 
                alt="Решетки-дробилки" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Описание</h3>
              <p className="text-muted-foreground leading-relaxed">
                Решетки-дробилки предназначены для механической очистки сточных вод от крупных твердых включений 
                с одновременным их измельчением. Оборудование широко применяется на очистных сооружениях, 
                канализационных насосных станциях и промышленных предприятиях.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Ассортимент оборудования</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Icon name="Settings" className="mr-2 text-primary" size={24} />
                      Дробилка канализационная ДКС
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Предназначена для установки в канализационные колодцы. Измельчает твердые включения 
                      непосредственно в потоке сточных вод. Производительность до 200 м³/ч.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Icon name="Cog" className="mr-2 text-primary" size={24} />
                      Мацераторы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Компактные дробильные установки для бытовых и промышленных стоков. 
                      Эффективно измельчают органические и неорганические включения. Мощность от 1,5 до 15 кВт.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Icon name="Wrench" className="mr-2 text-primary" size={24} />
                      Дробилки канализационные на трубу
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Встраиваются непосредственно в трубопровод DN 100-400. Автоматический режим работы 
                      с системой самоочистки. Защита от перегрузок и заклинивания.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Icon name="Grid3x3" className="mr-2 text-primary" size={24} />
                      Решетка-дробилка РД-600
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Для каналов шириной 600 мм. Производительность до 500 м³/ч. 
                      Совмещает функции механической решетки и дробилки. Мощность привода 5,5 кВт.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Icon name="Grid3x3" className="mr-2 text-primary" size={24} />
                      Решетка-дробилка РД-200
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Компактная модель для каналов 200 мм. Производительность до 150 м³/ч. 
                      Идеально подходит для небольших КНС и локальных очистных сооружений. Мощность 2,2 кВт.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Преимущества оборудования</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Защита насосов от засорения и поломок</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Автоматический режим работы</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Низкие эксплуатационные затраты</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Компактные размеры</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Простое обслуживание</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Долговечная конструкция</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => {
                  setShowDksDetails(false);
                  scrollToSection('contacts');
                }}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;