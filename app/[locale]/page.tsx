import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {Search, Star, Shield, Users, Award, Play, ChevronRight} from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations();

  const bestOffers = [
    {
      id: 1,
      title: '2х комнатная квартира',
      location: 'Дубай Марина',
      area: '100 м2',
      price: '1 000 000 $',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: '3х комнатная квартира',
      location: 'Palm Jumeirah',
      area: '120 м2',
      price: '1 500 000 $',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Пентхаус',
      location: 'Downtown Dubai',
      area: '200 м2',
      price: '3 000 000 $',
      image: '/api/placeholder/400/300'
    }
  ];

  const exclusiveOffers = [
    {
      id: 1,
      title: 'Элитная вилла',
      location: 'Emirates Hills',
      area: '500 м2',
      price: '5 000 000 $',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Таунхаус',
      location: 'Dubai Hills',
      area: '300 м2',
      price: '2 500 000 $',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Апартаменты',
      location: 'Business Bay',
      area: '150 м2',
      price: '1 800 000 $',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Пентхаус с террасой',
      location: 'Marina Walk',
      area: '250 м2',
      price: '4 000 000 $',
      image: '/api/placeholder/400/300'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: t('sections.benefits.exclusiveAccess')
    },
    {
      icon: Shield,
      title: t('sections.benefits.legalSupport')
    },
    {
      icon: Users,
      title: t('sections.benefits.individualApproach')
    },
    {
      icon: Award,
      title: t('sections.benefits.residencePermit')
    }
  ];

  const experts = [
    {
      name: 'Иван Иванов',
      position: 'Старший брокер',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Анна Петрова',
      position: 'Менеджер по продажам',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Инвестиционный консультант',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Елена Козлова',
      position: 'Юридический консультант',
      image: '/api/placeholder/150/150'
    }
  ];

  const districts = [
    {
      name: 'Дубай Марина',
      description: 'Элитный район с развитой инфраструктурой',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Palm Jumeirah',
      description: 'Искусственный остров с роскошными виллами',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Downtown Dubai',
      description: 'Центр города с небоскребами',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Business Bay',
      description: 'Деловой район с современными офисами',
      image: '/api/placeholder/400/300'
    }
  ];

  const lifestyleOptions = [
    {
      title: 'Квартиры в центре',
      description: 'Современные апартаменты в самом сердце Дубая',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Виллы на побережье',
      description: 'Роскошные виллы с видом на море',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Пентхаусы с видом',
      description: 'Эксклюзивные пентхаусы с панорамными видами',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Инвестиции в недвижимость',
      description: 'Выгодные инвестиционные возможности',
      image: '/api/placeholder/400/300'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Смирнова',
      text: 'Отличное агентство! Помогли найти идеальную квартиру в Дубай Марина. Профессиональный подход и индивидуальное внимание.',
      image: '/api/placeholder/100/100'
    },
    {
      name: 'Дмитрий Козлов',
      text: 'Alpha Star Properties - это команда профессионалов. Быстро нашли подходящий вариант для инвестиций.',
      image: '/api/placeholder/100/100'
    },
    {
      name: 'Мария Петрова',
      text: 'Очень довольна сотрудничеством. Полное юридическое сопровождение и поддержка на всех этапах.',
      image: '/api/placeholder/100/100'
    }
  ];

  const faqItems = [
    {
      question: 'Сколько стоит элитная недвижимость в Дубае?',
      description: 'Цены на элитную недвижимость в Дубае варьируются от 1 до 10 миллионов долларов.'
    },
    {
      question: 'Как получить резидентскую визу через недвижимость?',
      description: 'При покупке недвижимости на сумму от 1 млн дирхамов можно получить резидентскую визу.'
    },
    {
      question: 'Какие документы нужны для покупки?',
      description: 'Для покупки недвижимости в Дубае нужны паспорт, справка о доходах и другие документы.'
    }
  ];

  const blogPosts = [
    {
      date: '24.03.2024',
      title: 'Как выбрать идеальную недвижимость в Дубае',
      description: 'Руководство по выбору недвижимости в эмирате Дубай',
      image: '/api/placeholder/300/200'
    },
    {
      date: '20.03.2024',
      title: 'Инвестиции в недвижимость ОАЭ',
      description: 'Преимущества инвестирования в недвижимость ОАЭ',
      image: '/api/placeholder/300/200'
    },
    {
      date: '18.03.2024',
      title: 'Новые проекты в Дубае 2024',
      description: 'Обзор новых жилых проектов в Дубае',
      image: '/api/placeholder/300/200'
    },
    {
      date: '15.03.2024',
      title: 'Процесс покупки недвижимости',
      description: 'Пошаговое руководство по покупке недвижимости',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pale-yellow to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-deep-blue mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {t('hero.subtitle')}
            </p>
            
            {/* Search Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('hero.search.district')}
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue">
                    <option>Выберите район</option>
                    <option>Дубай Марина</option>
                    <option>Palm Jumeirah</option>
                    <option>Downtown Dubai</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('hero.search.propertyType')}
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue">
                    <option>Тип недвижимости</option>
                    <option>Квартира</option>
                    <option>Вилла</option>
                    <option>Пентхаус</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('hero.search.rooms')}
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue">
                    <option>Комнаты</option>
                    <option>1 комната</option>
                    <option>2 комнаты</option>
                    <option>3+ комнат</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('hero.search.price')}
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue">
                    <option>Цена</option>
                    <option>До 1 млн $</option>
                    <option>1-3 млн $</option>
                    <option>3+ млн $</option>
                  </select>
                </div>
              </div>
              <button className="btn-primary w-full md:w-auto px-8 py-3 flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>{t('hero.search.find')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Offers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.bestOffers.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {bestOffers.map((offer) => (
              <div key={offer.id} className="card">
                <div className="placeholder-image h-64">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-2">{offer.location}</p>
                  <p className="text-sm text-gray-500 mb-2">{t('property.area')}: {offer.area}</p>
                  <p className="text-lg font-bold text-medium-blue mb-4">{t('property.price')}: {offer.price}</p>
                  <button className="btn-secondary w-full">
                    {t('sections.bestOffers.details')}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-primary">
              {t('sections.bestOffers.showAll')}
            </button>
          </div>
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.exclusiveOffers.title')}
          </h2>
          
          {/* Category Filters */}
          <div className="flex justify-center space-x-4 mb-8">
            {['all', 'apartments', 'villas', 'penthouses', 'townhouses'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 hover:border-medium-blue hover:text-medium-blue transition-colors"
              >
                {t(`sections.exclusiveOffers.${category}`)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {exclusiveOffers.map((offer) => (
              <div key={offer.id} className="card">
                <div className="placeholder-image h-48">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-2">{offer.location}</p>
                  <p className="text-sm text-gray-500 mb-2">{t('property.area')}: {offer.area}</p>
                  <p className="text-lg font-bold text-medium-blue mb-4">{t('property.price')}: {offer.price}</p>
                  <button className="btn-secondary w-full">
                    {t('sections.bestOffers.details')}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-primary">
              {t('sections.exclusiveOffers.showAll')}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="placeholder-image h-96 rounded-2xl">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Contact"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-deep-blue mb-6">
                  {t('sections.contactForm.title')}
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('sections.contactForm.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('sections.contactForm.phone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('sections.contactForm.email')}
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mr-2"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      {t('sections.contactForm.privacy')}
                    </label>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {t('sections.contactForm.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.benefits.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-medium-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-deep-blue">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.about.title')}
          </h2>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-medium-blue mb-2">5600+</div>
              <div className="text-gray-600">{t('sections.about.satisfiedClients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medium-blue mb-2">900+</div>
              <div className="text-gray-600">{t('sections.about.propertiesForSale')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medium-blue mb-2">2000+</div>
              <div className="text-gray-600">{t('sections.about.dealsPerYear')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medium-blue mb-2">860 000+</div>
              <div className="text-gray-600">{t('sections.about.soldRealEstate')}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Alpha Star Properties - это ведущее агентство элитной недвижимости в ОАЭ, 
                специализирующееся на продаже, аренде и инвестициях в премиальную недвижимость Дубая. 
                Наша команда профессионалов поможет вам найти идеальное решение для ваших потребностей.
              </p>
              <p className="text-lg text-gray-600">
                Мы предлагаем полный спектр услуг: от консультации по выбору недвижимости 
                до юридического сопровождения сделок и помощи в получении резидентской визы.
              </p>
            </div>
            <div className="placeholder-image h-80 rounded-2xl relative">
              <Image
                src="/api/placeholder/600/400"
                alt="About us"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                  <Play className="w-8 h-8 text-medium-blue ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-deep-blue mb-8">
              {t('sections.about.partners')}
            </h3>
            <div className="flex justify-center space-x-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="placeholder-image w-32 h-16 rounded">
                  <span className="text-gray-400">Partner {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.experts.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {experts.map((expert, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-deep-blue mb-1">
                  {expert.name}
                </h3>
                <p className="text-gray-600">{expert.position}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-primary">
              {t('sections.experts.showAll')}
            </button>
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.districts.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {districts.map((district, index) => (
              <div key={index} className="card">
                <div className="placeholder-image h-48">
                  <Image
                    src={district.image}
                    alt={district.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-deep-blue mb-2">
                    {district.name}
                  </h3>
                  <p className="text-gray-600">{district.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-primary">
              {t('sections.districts.showAll')}
            </button>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.lifestyle.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {lifestyleOptions.map((option, index) => (
              <div key={index} className="card">
                <div className="placeholder-image h-48">
                  <Image
                    src={option.image}
                    alt={option.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-deep-blue mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-primary">
              {t('sections.lifestyle.showAll')}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.testimonials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-deep-blue">{testimonial.name}</h4>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-primary">
              {t('sections.testimonials.showAll')}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.faq.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {faqItems.map((item, index) => (
                <div key={index} className="card p-6">
                  <div className="w-12 h-12 bg-medium-blue rounded-full flex items-center justify-center mb-4">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <h3 className="text-lg font-semibold text-deep-blue mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="btn-primary">
                {t('sections.faq.showAll')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.office.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="placeholder-image h-64 rounded-2xl">
                <Image
                  src="/api/placeholder/400/300"
                  alt={`Office ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="placeholder-image h-64 rounded-2xl mx-auto max-w-4xl">
              <Image
                src="/api/placeholder/800/400"
                alt="Map"
                width={800}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="mt-6 text-lg text-gray-600">
              <p>Адрес: Dubai Marina, UAE</p>
              <p>Телефон: +971 4 123 4567</p>
              <p>Email: info@alphastarproperties.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="placeholder-image h-96 rounded-2xl">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Consultation"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-deep-blue mb-6">
                  {t('sections.consultation.title')}
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('sections.contactForm.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('sections.contactForm.phone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('sections.contactForm.email')}
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="your@email.com"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {t('sections.contactForm.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            {t('sections.blog.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="card">
                <div className="placeholder-image h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-lg font-semibold text-deep-blue mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-primary">
              {t('sections.blog.showAll')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
