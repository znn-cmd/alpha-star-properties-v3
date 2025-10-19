import React from 'react';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import Link from 'next/link';
import {Calendar, User, Tag, ChevronRight} from 'lucide-react';
import Image from 'next/image';

export default function BlogPage({params}: {params: Promise<{locale: string}>}) {
  const locale = React.use(params).locale;
  setRequestLocale(locale);
  const t = useTranslations();

  const blogPosts = [
    {
      id: 1,
      title: 'Как выбрать идеальную недвижимость в Дубае',
      excerpt: 'Руководство по выбору недвижимости в эмирате Дубай с учетом всех нюансов',
      date: '24.03.2024',
      author: 'Анна Петрова',
      category: 'Советы',
      image: '/api/placeholder/400/300',
      readTime: '5 мин чтения'
    },
    {
      id: 2,
      title: 'Инвестиции в недвижимость ОАЭ: полное руководство',
      excerpt: 'Преимущества инвестирования в недвижимость ОАЭ и основные стратегии',
      date: '20.03.2024',
      author: 'Михаил Сидоров',
      category: 'Инвестиции',
      image: '/api/placeholder/400/300',
      readTime: '8 мин чтения'
    },
    {
      id: 3,
      title: 'Новые проекты в Дубае 2024: обзор рынка',
      excerpt: 'Обзор новых жилых проектов в Дубае и их инвестиционный потенциал',
      date: '18.03.2024',
      author: 'Дмитрий Гаврилов',
      category: 'Новости',
      image: '/api/placeholder/400/300',
      readTime: '6 мин чтения'
    },
    {
      id: 4,
      title: 'Процесс покупки недвижимости в ОАЭ: пошаговое руководство',
      excerpt: 'Подробное руководство по покупке недвижимости в ОАЭ для иностранцев',
      date: '15.03.2024',
      author: 'Елена Козлова',
      category: 'Гид',
      image: '/api/placeholder/400/300',
      readTime: '10 мин чтения'
    },
    {
      id: 5,
      title: 'Лучшие районы для жизни в Дубае',
      excerpt: 'Обзор самых популярных районов Дубая для проживания и инвестиций',
      date: '12.03.2024',
      author: 'Анна Петрова',
      category: 'Районы',
      image: '/api/placeholder/400/300',
      readTime: '7 мин чтения'
    },
    {
      id: 6,
      title: 'Налогообложение недвижимости в ОАЭ',
      excerpt: 'Все о налогах и сборах при покупке и владении недвижимостью в ОАЭ',
      date: '10.03.2024',
      author: 'Елена Козлова',
      category: 'Налоги',
      image: '/api/placeholder/400/300',
      readTime: '9 мин чтения'
    }
  ];

  const categories = [
    'Все',
    'Советы',
    'Инвестиции',
    'Новости',
    'Гид',
    'Районы',
    'Налоги'
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue to-medium-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Блог</h1>
          <p className="text-xl">Актуальные новости и советы по недвижимости в Дубае</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-blue mb-8">Рекомендуемая статья</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="placeholder-image h-96 rounded-2xl">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-medium-blue text-white rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <User className="w-4 h-4 mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-deep-blue mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  <Link href={`/blog/${featuredPost.id}`} className="btn-primary">
                    Читать далее
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors ${
                  index === 0
                    ? 'bg-medium-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-medium-blue hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="placeholder-image h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="px-3 py-1 bg-medium-blue text-white rounded-full text-sm">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-deep-blue mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center text-medium-blue hover:text-deep-blue transition-colors"
                    >
                      <span>Читать</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-medium-blue to-bright-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Подпишитесь на нашу рассылку
          </h2>
          <p className="text-xl mb-8">
            Получайте актуальные новости и советы по недвижимости в Дубае
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-medium-blue px-6 py-3 rounded-r-lg font-medium hover:bg-gray-100 transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
