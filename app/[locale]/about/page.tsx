import React from 'react';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {Award, Users, Target, Shield, Star, TrendingUp, Globe, Heart} from 'lucide-react';
import Image from 'next/image';

export default function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const locale = React.use(params).locale;
  setRequestLocale(locale);
  const t = useTranslations();

  const stats = [
    { number: '5600+', label: 'Довольных клиентов', icon: Users },
    { number: '900+', label: 'Объектов в продаже', icon: Target },
    { number: '2000+', label: 'Сделок в год', icon: TrendingUp },
    { number: '860 000+', label: 'м² проданной недвижимости', icon: Globe }
  ];

  const values = [
    {
      icon: Star,
      title: 'Качество',
      description: 'Мы работаем только с проверенными объектами недвижимости и надежными застройщиками'
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Полное юридическое сопровождение всех сделок и гарантия безопасности инвестиций'
    },
    {
      icon: Heart,
      title: 'Индивидуальный подход',
      description: 'Каждый клиент получает персонального брокера и индивидуальные решения'
    },
    {
      icon: Award,
      title: 'Экспертиза',
      description: 'Более 10 лет опыта работы на рынке недвижимости ОАЭ'
    }
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      experience: '15 лет в недвижимости',
      image: '/api/placeholder/300/300',
      description: 'Эксперт по элитной недвижимости с многолетним опытом работы в ОАЭ'
    },
    {
      name: 'Дмитрий Гаврилов',
      position: 'Старший брокер',
      experience: '12 лет в недвижимости',
      image: '/api/placeholder/300/300',
      description: 'Специализируется на инвестиционной недвижимости и коммерческих объектах'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Инвестиционный консультант',
      experience: '10 лет в недвижимости',
      image: '/api/placeholder/300/300',
      description: 'Помогает клиентам выбрать наиболее выгодные инвестиционные возможности'
    },
    {
      name: 'Елена Козлова',
      position: 'Юридический консультант',
      experience: '8 лет в недвижимости',
      image: '/api/placeholder/300/300',
      description: 'Обеспечивает полное юридическое сопровождение всех сделок'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Лучшее агентство недвижимости',
      description: 'Награда от Dubai Land Department'
    },
    {
      year: '2023',
      title: 'Топ-10 агентств по объему продаж',
      description: 'Рейтинг Property Finder'
    },
    {
      year: '2022',
      title: 'Сертификат качества услуг',
      description: 'Международная сертификация ISO'
    },
    {
      year: '2021',
      title: 'Лучший клиентский сервис',
      description: 'Премия Dubai Real Estate Awards'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue to-medium-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Alpha Star Properties
            </h1>
            <p className="text-2xl mb-8">
              Ведущее агентство роскошной недвижимости в ОАЭ
            </p>
            <p className="text-xl text-blue-100">
              Более 10 лет помогаем клиентам найти идеальную недвижимость в Дубае
            </p>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-deep-blue mb-6">
                  О нашей компании
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Alpha Star Properties — это ведущее агентство элитной недвижимости в ОАЭ, 
                  специализирующееся на продаже, аренде и инвестициях в премиальную недвижимость Дубая.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Наша команда профессионалов с многолетним опытом работы поможет вам найти 
                  идеальное решение для ваших потребностей в недвижимости.
                </p>
                <p className="text-lg text-gray-600">
                  Мы предлагаем полный спектр услуг: от консультации по выбору недвижимости 
                  до юридического сопровождения сделок и помощи в получении резидентской визы.
                </p>
              </div>
              <div className="placeholder-image h-96 rounded-2xl">
                <Image
                  src="/api/placeholder/600/400"
                  alt="About us"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Наши достижения в цифрах
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-medium-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-deep-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-medium-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-deep-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Наша команда экспертов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-deep-blue mb-1">
                  {member.name}
                </h3>
                <p className="text-medium-blue font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {member.experience}
                </p>
                <p className="text-sm text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Награды и достижения
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-16 h-16 bg-medium-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-deep-blue mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-r from-medium-blue to-bright-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Наша миссия
          </h2>
          <p className="text-xl max-w-4xl mx-auto">
            Мы стремимся быть вашим надежным партнером в мире элитной недвижимости, 
            предоставляя исключительный сервис и помогая воплощать ваши мечты в реальность.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-deep-blue mb-6">
            Готовы начать работу с нами?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Свяжитесь с нами для получения персональной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3">
              Получить консультацию
            </button>
            <button className="btn-secondary px-8 py-3">
              Посмотреть объекты
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
