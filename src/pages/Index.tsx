import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    game: '',
    message: ''
  });

  const games = [
    {
      id: 'realtor',
      title: 'Игра для риэлторов',
      price: '15 000 ₽',
      duration: 'Индивидуально',
      participants: '2-6 человек',
      description: 'Единственная в России игра, которая моделирует полный цикл работы риэлтора с акцентом на баланс работы и жизни.',
      features: [
        'Навыки переговоров и заключения сделок',
        'Стратегическое планирование',
        'Управление ресурсами (время, энергия, финансы)',
        'Эмоциональный интеллект'
      ],
      benefits: [
        'Разработана практикующими экспертами в недвижимости',
        'Реальные процессы от поиска клиентов до закрытия сделок',
        'Качественные материалы: деревянные фишки, тряпичное поле',
        'Онлайн-сопровождение первой игры'
      ],
      target: ['Начинающие риэлторы', 'Опытные агенты', 'Руководители агентств недвижимости']
    },
    {
      id: 'factory',
      title: 'Фабрика игрушек',
      price: 'По запросу',
      duration: '4 часа',
      participants: 'От 16 человек',
      description: 'Бизнес-игра, где 4 часа равны году из жизни компании. Результат за 20 минут – то, что в жизни занимает 3 месяца.',
      features: [
        'Командная слаженность и взаимопонимание',
        'Навыки антикризисного управления',
        'Опыт ведения эффективных планерок',
        'Лидерские качества и мотивация',
        'Понимание бизнеса как единого организма'
      ],
      benefits: [
        'Практика вместо теории – решения и их последствия видны сразу',
        'Полное погружение – азарт и драйв заменяют скучные лекции',
        'Моделируются все бизнес-процессы: производство, логистика, маркетинг',
        'Финансовая отчетность и стратегическое планирование'
      ],
      target: ['Руководители отделов', 'Команды от 16 человек', 'Компании для тимбилдинга']
    }
  ];

  const authors = [
    {
      name: 'Елена Филиошина',
      title: 'Бизнес-тренер',
      description: 'Бизнес-тренер с обучением в бизнес-школе «Сколково». Эксперт в области развития команд и управленческих навыков.'
    },
    {
      name: 'Ярослав Панакин',
      title: 'Коуч, автор',
      description: 'Коуч и автор книги по управленческим решениям. Специализируется на стратегическом планировании и развитии лидерских качеств.'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', game: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">BUSINESS GAMES STORE</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-accent transition-colors">Каталог игр</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">О нас</button>
              <button onClick={() => scrollToSection('authors')} className="text-sm font-medium hover:text-accent transition-colors">Авторы</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-accent transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('order')} className="hidden md:block">
              Заказать игру
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in">Бизнес-игры для развития команды</h2>
            <p className="text-xl mb-8 opacity-90">
              Превратите обучение в захватывающий процесс с мгновенными результатами. Практика вместо теории.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => scrollToSection('catalog')} size="lg" variant="secondary" className="gap-2">
                <Icon name="PlayCircle" size={20} />
                Смотреть каталог
              </Button>
              <Button onClick={() => scrollToSection('order')} size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Заказать игру
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Каталог игр</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональные бизнес-игры для развития навыков переговоров, стратегического мышления и командной работы
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {games.map((game) => (
              <Card key={game.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="text-2xl">{game.title}</CardTitle>
                  <CardDescription className="text-white/80">{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="flex justify-between items-center border-b pb-4">
                    <div>
                      <div className="text-3xl font-bold text-accent">{game.price}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {game.duration} • {game.participants}
                      </div>
                    </div>
                    <Icon name="Award" size={40} className="text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-accent" />
                      Что прокачиваем:
                    </h4>
                    <ul className="space-y-2">
                      {game.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Star" size={18} className="text-accent" />
                      Почему стоит выбрать:
                    </h4>
                    <ul className="space-y-2">
                      {game.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Users" size={18} className="text-accent" />
                      Для кого:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {game.target.map((t, idx) => (
                        <span key={idx} className="text-xs bg-secondary px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => scrollToSection('order')} className="w-full" size="lg">
                    Заказать игру
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">О нас</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-center text-muted-foreground mb-8">
                Мы создаём профессиональные бизнес-игры, которые помогают развивать реальные навыки через практику и вовлечение.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Эффективность</h3>
                  <p className="text-sm text-muted-foreground">Результаты видны сразу после первой игры</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Команда экспертов</h3>
                  <p className="text-sm text-muted-foreground">Разработано практикующими специалистами</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Качество</h3>
                  <p className="text-sm text-muted-foreground">Премиальные материалы и продуманная механика</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="authors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Авторы и ведущие</h2>
          <p className="text-center text-muted-foreground mb-12">Опытные бизнес-тренеры и коучи с международным признанием</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {authors.map((author, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="User" size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{author.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{author.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{author.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Форма заказа</h2>
            <p className="text-center text-muted-foreground mb-12">
              Заполните форму, и мы свяжемся с вами для уточнения деталей
            </p>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="game">Выберите игру *</Label>
                    <Select value={formData.game} onValueChange={(value) => setFormData({ ...formData, game: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите игру" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtor">Игра для риэлторов (15 000 ₽)</SelectItem>
                        <SelectItem value="factory">Фабрика игрушек (По запросу)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашей команде и целях обучения..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Контакты</h2>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нами любым удобным способом
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <Icon name="Mail" size={32} />
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:info@businessgames.ru" className="hover:underline opacity-90">info@businessgames.ru</a>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <Icon name="Phone" size={32} />
                <h3 className="font-semibold">Телефон</h3>
                <a href="tel:+79999999999" className="hover:underline opacity-90">+7 (999) 999-99-99</a>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <Icon name="MessageCircle" size={32} />
                <h3 className="font-semibold">Telegram</h3>
                <a href="https://t.me/businessgames" className="hover:underline opacity-90">@businessgames</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">© 2025 Business Games Store. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
