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
      title: 'Счастливый Риэлтор',
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
      price: '20 000 ₽',
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
    },
    {
      id: 'oil',
      title: 'В поисках нефти',
      price: '20 000 ₽',
      duration: '4 часа',
      participants: 'От 15 человек',
      description: 'Динамичная бизнес-симуляция, которая погружает участников в реалии нефтедобывающей компании. 4 квартала = 1 финансовый год компании.',
      features: [
        'Развитие стратегического мышления и лидерских качеств',
        'Повышение финансовой грамотности (отчетность, налоги, прибыль)',
        'Навыки командного взаимодействия и управления в кризисе',
        'Эффективное управление временем и адаптация к изменениям'
      ],
      benefits: [
        'Каждый квартал длится 20 минут',
        'Команды оптимизируют процессы и решают кризисные ситуации',
        'Анализ финансовых результатов после каждого этапа',
        'Не требует специальной подготовки'
      ],
      target: ['Руководители', 'Менеджеры среднего звена', 'Команды для развития управленческих навыков']
    },
    {
      id: 'orange',
      title: 'Апельсиновый остров',
      price: '20 000 ₽',
      duration: '1.5-2 часа',
      participants: '12 человек',
      description: 'Ролевая деловая игра на развитие навыков ведения переговоров, управления конфликтами и эмоциональным интеллектом в условиях ограниченных ресурсов.',
      features: [
        'Навыки ведения переговоров и убеждения',
        'Управление эмоциями в условиях стресса',
        'Лидерские качества и стратегическое мышление',
        'Командное взаимодействие и решение конфликтов'
      ],
      benefits: [
        '8 активных игроков с ролями + 4 наблюдателя',
        '20-30 минут на переговоры с критическими правилами',
        'Решение должно быть принято единогласно',
        'Подробный разбор с оценочными листами'
      ],
      target: ['Руководители', 'Специалисты по продажам', 'Менеджеры, работающие с переговорами']
    },
    {
      id: 'zavod',
      title: 'Завод',
      price: '10 000 ₽',
      duration: '45-60 минут',
      participants: 'От 10 человек',
      description: 'Найдите единственное верное место для строительства завода, используя ограниченную информацию. 3 минуты на запоминание + 15 минут на решение.',
      features: [
        'Командная коммуникация',
        'Стратегическое мышление',
        'Лидерские качества',
        'Работа с данными в условиях неопределенности'
      ],
      benefits: [
        'Быстрый формат игры',
        'Эффективное взаимодействие в команде',
        'Выявление лидерского потенциала',
        'Навыки принятия решений под давлением'
      ],
      target: ['Корпоративные команды', 'Руководители', 'Сотрудники для тимбилдинга']
    }
  ];

  const authors = [
    {
      name: 'Елена Филиошина',
      title: 'Бизнес-тренер, директор по развитию',
      description: 'Директор по развитию КГ «ИнтерАктив», бизнес-тренер с обучением в бизнес-школе «Сколково». Опыт тренинговой работы более 15 лет. Автор и ведущий игр: В поисках нефти, Апельсиновый остров.'
    },
    {
      name: 'Ярослав Панакин',
      title: 'Коуч, автор',
      description: 'Коуч и автор книги по управленческим решениям. Специализируется на стратегическом планировании и развитии лидерских качеств. Соавтор игры Фабрика игрушек.'
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
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary tracking-tight">ИНТЕРАКТИВ</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-accent transition-all hover:scale-105">Главная</button>
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-accent transition-all hover:scale-105">Каталог игр</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-all hover:scale-105">О нас</button>
              <button onClick={() => scrollToSection('authors')} className="text-sm font-medium hover:text-accent transition-all hover:scale-105">Авторы</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-accent transition-all hover:scale-105">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('order')} className="hidden md:block shadow-lg hover:shadow-xl transition-all">
              Заказать игру
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight mt-6">
              Бизнес-игры для развития команды
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Превратите обучение в захватывающий процесс с мгновенными результатами. Практика вместо теории.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => scrollToSection('catalog')} size="lg" variant="secondary" className="gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                <Icon name="PlayCircle" size={20} />
                Смотреть каталог
              </Button>
              <Button onClick={() => scrollToSection('order')} size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm shadow-xl hover:scale-105 transition-all">
                Заказать игру
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Каталог игр</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Профессиональные бизнес-игры для развития навыков переговоров, стратегического мышления и командной работы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {games.map((game, idx) => (
              <Card key={game.id} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden group" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative bg-gradient-to-br from-primary to-primary/90 text-white">
                  <CardTitle className="text-2xl mb-2">{game.title}</CardTitle>
                  <CardDescription className="text-white/90 leading-relaxed">{game.description}</CardDescription>
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
                        <span key={idx} className="text-xs bg-gradient-to-r from-secondary to-secondary/80 px-3 py-1.5 rounded-full font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50/50">
                  <Button onClick={() => scrollToSection('order')} className="w-full shadow-md hover:shadow-lg transition-all" size="lg">
                    Заказать игру
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">О нас</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
                Мы создаём профессиональные бизнес-игры, которые помогают развивать реальные навыки через практику и вовлечение.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Icon name="TrendingUp" size={36} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Эффективность</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Результаты видны сразу после первой игры</p>
                </div>
                
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Icon name="Users" size={36} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Команда экспертов</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Разработано практикующими специалистами</p>
                </div>
                
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Icon name="Award" size={36} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Качество</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Премиальные материалы и продуманная механика</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="authors" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Авторы и ведущие</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Опытные бизнес-тренеры и коучи с международным признанием</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {authors.map((author, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg group">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full opacity-50"></div>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{author.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-base">{author.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{author.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Форма заказа</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Заполните форму, и мы свяжемся с вами для уточнения деталей
            </p>
            
            <Card className="shadow-xl border-0">
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
                        <SelectItem value="realtor">Счастливый Риэлтор (15 000 ₽)</SelectItem>
                        <SelectItem value="factory">Фабрика игрушек (20 000 ₽)</SelectItem>
                        <SelectItem value="oil">В поисках нефти (20 000 ₽)</SelectItem>
                        <SelectItem value="orange">Апельсиновый остров (20 000 ₽)</SelectItem>
                        <SelectItem value="zavod">Завод (10 000 ₽)</SelectItem>
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

                  <Button type="submit" size="lg" className="w-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent)] opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Контакты</h2>
            <p className="text-xl mb-12 opacity-90">
              Свяжитесь с нами любым удобным способом
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={32} />
                </div>
                <h3 className="font-bold text-lg">Email</h3>
                <a href="mailto:interaktiv@interakiv72.ru" className="hover:underline">interaktiv@interakiv72.ru</a>
              </div>
              
              <div className="flex flex-col items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} />
                </div>
                <h3 className="font-bold text-lg">Телефон</h3>
                <a href="tel:+79068277444" className="hover:underline">+7 (906) 827-74-44</a>
              </div>
              
              <div className="flex flex-col items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={32} />
                </div>
                <h3 className="font-bold text-lg">Telegram</h3>
                <a href="https://t.me/Elena_Filyushina" className="hover:underline">@Elena_Filyushina</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">© 2025 Интерактив. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;