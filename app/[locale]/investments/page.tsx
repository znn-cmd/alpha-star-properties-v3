import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {TrendingUp, DollarSign, MapPin, Calendar, Star, Target, Shield, Users} from 'lucide-react';
import Image from 'next/image';

type PageProps = {
  params: {locale: string};
};

export default function InvestmentsPage({params}: PageProps) {
  setRequestLocale(params.locale);
  const t = useTranslations();

  const investmentTypes = [
    {
      title: 'Жилая недвижимость',
      description: 'Квартиры, виллы и пентхаусы для сдачи в аренду',
      roi: '6-8%',
      risk: 'Низкий',
      image: '/api/placeholder/400/300',
      features: ['Стабильный доход', 'Рост стоимости', 'Простота управления']
    },
    {
      title: 'Коммерческая недвижимость',
      description: 'Офисы, торговые площади и склады',
      roi: '8-12%',
      risk: 'Средний',
      image: '/api/placeholder/400/300',
      features: ['Высокая доходность', 'Долгосрочные контракты', 'Профессиональные арендаторы']
    },
    {
      title: 'Новостройки',
      description: 'Инвестиции в строящиеся объекты',
      roi: '15-25%',
      risk: 'Высокий',
      image: '/api/placeholder/400/300',
      features: ['Высокий потенциал роста', 'Гибкие условия оплаты', 'Современная инфраструктура']
    },
    {
      title: 'Элитная недвижимость',
      description: 'Премиальные объекты в лучших районах',
      roi: '4-6%',
      risk: 'Низкий',
      image: '/api/placeholder/400/300',
      features: ['Статусное владение', 'Стабильная стоимость', 'Эксклюзивность']
    }
  ];

  const advantages = [
    {
      icon: DollarSign,
      title: 'Отсутствие налогов',
      description: 'Нет налога на доход от недвижимости и прирост капитала'
    },
    {
      icon: Shield,
      title: 'Стабильная экономика',
      description: 'ОАЭ - одна из самых стабильных экономик мира'
    },
    {
      icon: TrendingUp,
      title: 'Рост рынка',
      description: 'Постоянный рост цен на недвижимость в Дубае'
    },
    {
      icon: Users,
      title: 'Международный статус',
      description: 'Дубай - глобальный финансовый центр'
    }
  ];

  const investmentSteps = [
    {
      step: 1,
      title: 'Консультация',
      description: 'Анализ ваших инвестиционных целей и возможностей'
    },
    {
      step: 2,
      title: 'Подбор объектов',
      description: 'Поиск подходящих объектов с учетом ваших требований'
    },
    {
      step: 3,
      title: 'Анализ инвестиций',
      description: 'Расчет доходности и рисков для каждого объекта'
    },
    {
      step: 4,
      title: 'Покупка',
      description: 'Оформление сделки и получение документов'
    },
    {
      step: 5,
      title: 'Управление',
      description: 'Сдача в аренду и управление недвижимостью'
    }
  ];

  const successStories = [
    {
      client: 'Александр К.',
      investment: 'Квартира в Dubai Marina',
      amount: '$500,000',
      roi: '7.5%',
      period: '2 года',
      description: 'Стабильный доход от аренды и рост стоимости на 15%'
    },
    {
      client: 'Мария С.',
      investment: 'Офис в Business Bay',
      amount: '$800,000',
      roi: '9.2%',
      period: '3 года',
      description: 'Долгосрочный контракт с международной компанией'
    },
    {
      client: 'Дмитрий П.',
      investment: 'Вилла на Palm Jumeirah',
      amount: '$2,500,000',
      roi: '5.8%',
      period: '4 года',
      description: 'Премиальная аренда и статусное владение'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue to-medium-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Инвестиции в недвижимость ОАЭ
            </h1>
            <p className="text-xl mb-8">
              Выгодные инвестиционные возможности в одной из самых динамично развивающихся экономик мира
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6-12%</div>
                <div className="text-blue-100">Средняя доходность</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">0%</div>
                <div className="text-blue-100">Налоги на доход</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Право собственности</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Типы инвестиций
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="placeholder-image h-48">
                  <Image
                    src={type.image}
                    alt={type.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-deep-blue mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Доходность</div>
                      <div className="text-lg font-bold text-medium-blue">{type.roi}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Риск</div>
                      <div className="text-lg font-bold text-gray-700">{type.risk}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-1 mb-4">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-medium-blue mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn-primary w-full">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Преимущества инвестиций в ОАЭ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-medium-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-deep-blue mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Процесс инвестирования
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {investmentSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-medium-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-deep-blue mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Истории успеха наших клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medium-blue rounded-full flex items-center justify-center text-white font-bold">
                    {story.client.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-deep-blue">{story.client}</h3>
                    <p className="text-sm text-gray-600">{story.investment}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Инвестиция</div>
                    <div className="font-bold text-medium-blue">{story.amount}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Доходность</div>
                    <div className="font-bold text-medium-blue">{story.roi}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{story.description}</p>
                
                <div className="text-sm text-gray-500">
                  Период: {story.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-medium-blue to-bright-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы начать инвестировать?
          </h2>
          <p className="text-xl mb-8">
            Получите персональную консультацию по инвестициям в недвижимость ОАЭ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-medium-blue px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Получить консультацию
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-medium-blue transition-colors">
              Посмотреть объекты
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
