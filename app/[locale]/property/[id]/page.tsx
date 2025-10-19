import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {Bed, Bath, Square, MapPin, Phone, Mail, Calendar, Share2, Heart, ChevronRight} from 'lucide-react';
import Image from 'next/image';

export default function PropertyDetailPage() {
  const t = useTranslations();

  const property = {
    id: 223221,
    title: 'Апартаменты с 2 спальнями в Six Senses Residences, Palm Jumeirah, Dubai',
    price: 2700000,
    location: 'Palm Jumeirah, Dubai',
    bedrooms: 2,
    bathrooms: 2,
    area: 243,
    type: 'Apartment',
    status: 'For Sale',
    referenceNo: '484-3071',
    furnishing: 'Unfurnished',
    parkingSpaces: 1,
    description: `Роскошные 2-спальные апартаменты в престижном комплексе Six Senses Residences на острове Palm Jumeirah. 
    Квартира расположена на высоком этаже с потрясающим видом на море и город. Просторная гостиная с открытой планировкой, 
    современная кухня с итальянской техникой, две спальни с ванными комнатами. Большой балкон с панорамными видами. 
    Комплекс предлагает множество удобств: общественный бассейн, фитнес-центр, спа, детская площадка. 
    Рядом расположены лучшие рестораны, торговые центры и пляжи. Отличная транспортная доступность. 
    Идеально подходит как для проживания, так и для инвестиций.`,
    features: [
      'Balcony',
      'Central air conditioning',
      'Covered parking',
      'Security',
      'Maids Room',
      'Private Gym',
      'Built-in wardrobes',
      'Walk-in closet'
    ],
    amenities: [
      'Общественный бассейн',
      'Крытая парковка',
      'Микроволновая печь',
      'Отдельное расположение на бульваре',
      'Кухня открытой планировки',
      'Рядом с парком Бурдж Халифа',
      'Рентабельность инвестиций'
    ],
    images: [
      '/api/placeholder/800/600',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ]
  };

  const agent = {
    name: 'Дмитрий Гаврилов',
    position: 'персональный брокер',
    phone: '+971 50 123 4567',
    email: 'dmitry@alphastarproperties.com',
    image: '/api/placeholder/150/150'
  };

  const nearbyPlaces = [
    { name: 'Школа', time: '6 мин' },
    { name: 'Клиника Al Nanna Centre', time: '10 мин' },
    { name: 'ТЦ First Avenue Mall', time: '12 мин' },
    { name: 'Аэропорт', time: '30 мин' }
  ];

  const similarProperties = [
    {
      id: 1,
      title: 'Ellington House',
      location: 'Dubai Hills, Dubai',
      bedrooms: 2,
      bathrooms: 1,
      area: 743,
      price: 2700000,
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Marina Heights',
      location: 'Dubai Marina, Dubai',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      price: 2200000,
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Business Bay Tower',
      location: 'Business Bay, Dubai',
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      price: 1800000,
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Downtown Views',
      location: 'Downtown Dubai, Dubai',
      bedrooms: 3,
      bathrooms: 2,
      area: 1500,
      price: 3200000,
      image: '/api/placeholder/400/300'
    }
  ];

  const nearbyAreas = [
    {
      name: 'Palm Jebel Ali',
      description: 'Новый искусственный остров с современной инфраструктурой',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Dubai Marina',
      description: 'Элитный район с развитой инфраструктурой',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'JBR',
      description: 'Пляжный район с множеством развлечений',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Emirates Hills',
      description: 'Роскошные виллы в зеленом районе',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-medium-blue">Главная</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/categories" className="text-gray-500 hover:text-medium-blue">Каталог</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">Апартаменты</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="placeholder-image h-96 rounded-2xl">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {property.images.slice(1, 5).map((image, index) => (
                    <div key={index} className="placeholder-image h-24 rounded-lg">
                      <Image
                        src={image}
                        alt={`Property image ${index + 2}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Title and Price */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h1 className="text-3xl font-bold text-deep-blue mb-4">
                {property.title}
              </h1>
              <div className="text-4xl font-bold text-medium-blue mb-4">
                {property.price.toLocaleString()} AED
              </div>
              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2" />
                  <span>{property.bedrooms} {t('property.bedrooms')}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2" />
                  <span>{property.bathrooms} {t('property.bathrooms')}</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2" />
                  <span>{property.area} {t('property.sqft')}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-medium-blue">
                  <Heart className="w-5 h-5" />
                  <span>В избранное</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-medium-blue">
                  <Share2 className="w-5 h-5" />
                  <span>Поделиться</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-deep-blue mb-6">
                {t('property.features')}
              </h2>
              <div className="flex flex-wrap gap-3">
                {property.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-deep-blue mb-6">
                {t('property.description')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {property.description}
              </p>
              <ul className="space-y-2">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-medium-blue rounded-full mr-3"></div>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-deep-blue mb-6">
                {t('property.additionalInfo')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.location')}:</span>
                    <span className="font-medium">{property.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.propertyType')}:</span>
                    <span className="font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.status')}:</span>
                    <span className="font-medium">{property.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.price')}:</span>
                    <span className="font-medium">{property.price.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.propertyId')}:</span>
                    <span className="font-medium">{property.id}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.referenceNo')}:</span>
                    <span className="font-medium">{property.referenceNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.propertySize')}:</span>
                    <span className="font-medium">{property.area} м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.bedrooms')}:</span>
                    <span className="font-medium">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.bathrooms')}:</span>
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.furnishing')}:</span>
                    <span className="font-medium">{property.furnishing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('property.parkingSpaces')}:</span>
                    <span className="font-medium">{property.parkingSpaces}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-deep-blue mb-6">
                Расположение в {property.location}
              </h2>
              <div className="placeholder-image h-64 rounded-2xl mb-6">
                <Image
                  src="/api/placeholder/800/400"
                  alt="Map"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <p className="text-gray-600 mb-6">
                Palm Jumeirah - это искусственный остров в форме пальмы, один из самых престижных районов Дубая. 
                Здесь расположены роскошные виллы, апартаменты и отели с потрясающими видами на море.
              </p>
              <button className="btn-secondary mb-6">
                Подробнее о районе
              </button>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-medium-blue mb-1">
                      {place.time}
                    </div>
                    <div className="text-sm text-gray-600">
                      {place.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Viewing Form */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-deep-blue mb-6">
                Забронируйте просмотр объекта в Alpha Star Properties
              </h2>
              <p className="text-gray-600 mb-6">
                Оставьте заявку и мы назначим вам персонального брокера для организации просмотра
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="placeholder-image h-64 rounded-2xl">
                  <Image
                    src="/api/placeholder/400/300"
                    alt="Booking"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
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
                    <button type="submit" className="btn-primary w-full">
                      Отправить заявку
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Similar Properties */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-deep-blue mb-6">
                {t('property.similarProperties')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProperties.map((similar) => (
                  <div key={similar.id} className="card">
                    <div className="placeholder-image h-48">
                      <Image
                        src={similar.image}
                        alt={similar.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-deep-blue mb-2">
                        {similar.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{similar.location}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{similar.bedrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          <span>{similar.bathrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="w-4 h-4 mr-1" />
                          <span>{similar.area} м²</span>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-medium-blue">
                        {similar.price.toLocaleString()} AED
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <button className="btn-primary">
                  {t('property.showMore')}
                </button>
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-deep-blue mb-6">
                {t('property.nearbyAreas')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {nearbyAreas.map((area, index) => (
                  <div key={index} className="card">
                    <div className="placeholder-image h-32">
                      <Image
                        src={area.image}
                        alt={area.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-deep-blue mb-2">
                        {area.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Agent Card */}
            <div className="bg-white rounded-2xl p-6 mb-8 sticky top-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-deep-blue mb-1">
                  {agent.name}
                </h3>
                <p className="text-gray-600 text-sm">{agent.position}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:border-medium-blue hover:text-medium-blue transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{t('property.write')}</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:border-medium-blue hover:text-medium-blue transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{t('property.call')}</span>
                </button>
              </div>
              
              <button className="btn-primary w-full mb-4">
                {t('property.bookViewing')}
              </button>
              
              <div className="text-center text-sm text-gray-600">
                <p>Телефон: {agent.phone}</p>
                <p>Email: {agent.email}</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-medium-blue to-bright-turquoise text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">
                Нужна помощь?
              </h3>
              <p className="text-sm mb-6">
                Наши эксперты готовы ответить на все ваши вопросы о недвижимости в Дубае
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white text-medium-blue py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Бесплатная консультация
                </button>
                <button className="w-full border-2 border-white text-white py-3 rounded-lg font-medium hover:bg-white hover:text-medium-blue transition-colors">
                  Расчет ипотеки
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
