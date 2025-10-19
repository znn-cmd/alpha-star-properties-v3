"use client";

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu, X, Phone, Mail, MapPin} from 'lucide-react';
import {useState} from 'react';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { key: 'buy', href: `/${locale}/buy` },
    { key: 'rent', href: `/${locale}/rent` },
    { key: 'investments', href: `/${locale}/investments` },
    { key: 'about', href: `/${locale}/about` },
    { key: 'contacts', href: `/${locale}/contacts` },
    { key: 'blog', href: `/${locale}/blog` },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-deep-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+971 4 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@alphastarproperties.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/ru" className={locale === 'ru' ? 'font-bold' : ''}>
              RU
            </Link>
            <Link href="/en" className={locale === 'en' ? 'font-bold' : ''}>
              EN
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-medium-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-deep-blue">Alpha Star Properties</h1>
                <p className="text-sm text-gray-600">Elite Real Estate Dubai</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-gray-700 hover:text-medium-blue transition-colors ${
                    pathname === item.href ? 'text-medium-blue font-medium' : ''
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {t('leaveRequest')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-medium-blue hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`text-gray-700 hover:text-medium-blue transition-colors ${
                      pathname === item.href ? 'text-medium-blue font-medium' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('leaveRequest')}
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
