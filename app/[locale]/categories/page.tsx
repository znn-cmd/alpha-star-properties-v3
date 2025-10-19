import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {Search, Filter, MapPin, Bed, Bath, Square, ChevronRight} from 'lucide-react';
import Image from 'next/image';

export default function CategoriesPage() {
  const t = useTranslations();

  const categories = [
    {
      id: 'apartments',
      name: 'Квартиры',
      count: 245,
      image: '/api/placeholder/400/300',
      description: 'Современные апартаменты в лучших районах Дубая'
    },
    {
      id: 'villas',
      name: 'Виллы',
      count: 89,
      image: '/api/placeholder/400/300',
      description: 'Роскошные виллы с частными садами и бассейнами'
    },
    {
      id: 'penthouses',
      name: 'Пентхаусы',
      count: 34,
      image: '/api/placeholder/400/300',
      description: 'Эксклюзивные пентхаусы с панорамными видами'
    },
    {
      id: 'townhouses',
      name: 'Таунхаусы',
      count: 67,
      image: '/api/placeholder/400/300',
      description: 'Комфортабельные таунхаусы для семей'
    },
    {
      id: 'duplexes',
      name: 'Дуплексы',
      count: 23,
      image: '/api/placeholder/400/300',
      description: 'Просторные дуплексы с двумя уровнями'
    },
    {
      id: 'studios',
      name: 'Студии',
      count: 156,
      image: '/api/placeholder/400/300',
      description: 'Компактные студии для молодых специалистов'
    }
  ];

  const featuredProperties = [
    {
      id: 1,
      title: 'Элитная квартира в Дубай Марина',
      location: 'Dubai Marina',
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      price: 1200000,
      image: '/api/placeholder/400/300',
      category: 'apartments'
    },
    {
      id: 2,
      title: 'Вилла на Palm Jumeirah',
      location: 'Palm Jumeirah',
      bedrooms: 4,
      bathrooms: 5,
      area: 350,
      price: 3500000,
      image: '/api/placeholder/400/300',
      category: 'villas'
    },
    {
      id: 3,
      title: 'Пентхаус в Downtown Dubai',
      location: 'Downtown Dubai',
      bedrooms: 3,
      bathrooms: 3,
      area: 280,
      price: 2800000,
      image: '/api/placeholder/400/300',
      category: 'penthouses'
    },
    {
      id: 4,
      title: 'Таунхаус в Dubai Hills',
      location: 'Dubai Hills',
      bedrooms: 3,
      bathrooms: 3,
      area: 200,
      price: 1800000,
      image: '/api/placeholder/400/300',
      category: 'townhouses'
    },
    {
      id: 5,
      title: 'Дуплекс в Business Bay',
      location: 'Business Bay',
      bedrooms: 2,
      bathrooms: 2,
      area: 150,
      price: 1500000,
      image: '/api/placeholder/400/300',
      category: 'duplexes'
    },
    {
      id: 6,
      title: 'Студия в JBR',
      location: 'Jumeirah Beach Residence',
      bedrooms: 0,
      bathrooms: 1,
      area: 45,
      price: 450000,
      image: '/api/placeholder/400/300',
      category: 'studios'
    }
  ];

  const districts = [
    'Dubai Marina',
    'Palm Jumeirah',
    'Downtown Dubai',
    'Business Bay',
    'Dubai Hills',
    'JBR',
    'Emirates Hills',
    'Arabian Ranches'
  ];

  const priceRanges = [
    { label: 'До 500,000 AED', min: 0, max: 500000 },
    { label: '500,000 - 1,000,000 AED', min: 500000, max: 1000000 },
    { label: '1,000,000 - 2,000,000 AED', min: 1000000, max: 2000000 },
    { label: '2,000,000 - 5,000,000 AED', min: 2000000, max: 5000000 },
    { label: 'Свыше 5,000,000 AED', min: 5000000, max: Infinity }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue to-medium-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Каталог недвижимости в Дубае
            </h1>
            <p className="text-xl mb-12">
              Найдите идеальную недвижимость для покупки или аренды
            </p>
            
            {/* Search Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Район
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue">
                    <option>Выберите район</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип недвижимости
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue">
                    <option>Все типы</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Цена
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue">
                    <option>Любая цена</option>
                    {priceRanges.map((range, index) => (
                      <option key={index} value={index}>{range.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Спальни
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue">
                    <option>Любое количество</option>
                    <option value="0">Студия</option>
                    <option value="1">1 спальня</option>
                    <option value="2">2 спальни</option>
                    <option value="3">3 спальни</option>
                    <option value="4+">4+ спален</option>
                  </select>
                </div>
              </div>
              <button className="btn-primary w-full md:w-auto px-8 py-3 flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Найти недвижимость</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Категории недвижимости
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/properties/${category.id}`}>
                <div className="card hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="placeholder-image h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-deep-blue">
                        {category.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {category.count} объектов
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center text-medium-blue font-medium">
                      <span>Смотреть все</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Рекомендуемые объекты
          </h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-4 py-2 bg-white rounded-lg border border-gray-300 hover:border-medium-blue hover:text-medium-blue transition-colors">
              <Filter className="w-4 h-4 inline mr-2" />
              Все фильтры
            </button>
            <button className="px-4 py-2 bg-white rounded-lg border border-gray-300 hover:border-medium-blue hover:text-medium-blue transition-colors">
              По цене
            </button>
            <button className="px-4 py-2 bg-white rounded-lg border border-gray-300 hover:border-medium-blue hover:text-medium-blue transition-colors">
              По площади
            </button>
            <button className="px-4 py-2 bg-white rounded-lg border border-gray-300 hover:border-medium-blue hover:text-medium-blue transition-colors">
              По району
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="card hover:shadow-lg transition-shadow">
                <div className="placeholder-image h-64">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-deep-blue mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span>{property.bedrooms}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.area} м²</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-medium-blue">
                      {property.price.toLocaleString()} AED
                    </span>
                    <button className="btn-secondary text-sm px-4 py-2">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3">
              Показать больше объектов
            </button>
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-blue mb-12">
            Популярные районы
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {districts.map((district, index) => (
              <Link key={index} href={`/districts/${district.toLowerCase().replace(' ', '-')}`}>
                <div className="card p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-medium-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-deep-blue">
                    {district}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-medium-blue to-bright-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Не нашли подходящий вариант?
          </h2>
          <p className="text-xl mb-8">
            Наши эксперты помогут найти идеальную недвижимость под ваши требования
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-medium-blue px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Получить консультацию
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-medium-blue transition-colors">
              Записаться на просмотр
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
