import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import Link from 'next/link';
import {Phone, Mail, MapPin, Clock, MessageCircle} from 'lucide-react';

type PageProps = {
  params: {locale: string};
};

export default function ContactPage({params}: PageProps) {
  setRequestLocale(params.locale);
  const t = useTranslations();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      details: ['+971 4 123 4567', '+971 50 123 4567'],
      description: 'Звоните нам в любое время'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@alphastarproperties.com', 'sales@alphastarproperties.com'],
      description: 'Напишите нам для получения консультации'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      details: ['Dubai Marina, UAE', 'Office Tower, Floor 15'],
      description: 'Посетите наш офис в Дубае'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб: 10:00 - 16:00'],
      description: 'Мы работаем для вас'
    }
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      phone: '+971 50 111 1111',
      email: 'anna@alphastarproperties.com'
    },
    {
      name: 'Дмитрий Гаврилов',
      position: 'Старший брокер',
      phone: '+971 50 222 2222',
      email: 'dmitry@alphastarproperties.com'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Инвестиционный консультант',
      phone: '+971 50 333 3333',
      email: 'mikhail@alphastarproperties.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue to-medium-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl">Свяжитесь с нами для получения консультации по недвижимости в Дубае</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-medium-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-deep-blue mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-deep-blue mb-6">
                  Оставьте заявку
                </h2>
                <p className="text-gray-600 mb-8">
                  Заполните форму и наш эксперт свяжется с вами в течение 15 минут
                </p>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                      placeholder="Расскажите о ваших требованиях к недвижимости"
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mr-2"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Я согласен на обработку персональных данных *
                    </label>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Отправить заявку
                  </button>
                </form>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-deep-blue mb-6">
                  Наша команда
                </h2>
                <div className="space-y-6">
                  {team.map((member, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                      <h3 className="text-lg font-semibold text-deep-blue mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-3">{member.position}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{member.phone}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          <span>{member.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Как нас найти
          </h2>
          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Карта с расположением офиса</p>
              <p className="text-sm">Dubai Marina, Office Tower, Floor 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-to-r from-medium-blue to-bright-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Нужна срочная консультация?
          </h2>
          <p className="text-xl mb-8">
            Звоните нам прямо сейчас для получения быстрой консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+97141234567"
              className="bg-white text-medium-blue px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+971 4 123 4567</span>
            </a>
            <a
              href="https://wa.me/971501234567"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-medium-blue transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
