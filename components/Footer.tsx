import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import {Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const propertyLinks = [
    { key: 'apartments', href: `/${locale}/apartments` },
    { key: 'penthouses', href: `/${locale}/penthouses` },
    { key: 'townhouses', href: `/${locale}/townhouses` },
    { key: 'villas', href: `/${locale}/villas` },
    { key: 'duplexes', href: `/${locale}/duplexes` },
  ];

  const aboutLinks = [
    { key: 'services', href: `/${locale}/services` },
    { key: 'buy', href: `/${locale}/buy` },
    { key: 'rent', href: `/${locale}/rent` },
    { key: 'sale', href: `/${locale}/sale` },
    { key: 'cities', href: `/${locale}/cities` },
    { key: 'investments', href: `/${locale}/investments` },
    { key: 'consultations', href: `/${locale}/consultations` },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Youtube, href: 'https://youtube.com' },
    { icon: MessageCircle, href: 'https://t.me' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-deep-blue py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{t('newsletter')}</h3>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-medium-blue"
              />
              <button className="bg-medium-blue hover:bg-bright-turquoise px-6 py-3 rounded-r-lg font-medium transition-colors">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Property Offers */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('propertyOffers')}</h4>
              <ul className="space-y-2">
                {propertyLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.key.charAt(0).toUpperCase() + link.key.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('aboutUs')}</h4>
              <ul className="space-y-2">
                {aboutLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.key.charAt(0).toUpperCase() + link.key.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-medium-blue" />
                  <span className="text-gray-300">Dubai Marina, UAE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-medium-blue" />
                  <span className="text-gray-300">+971 4 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-medium-blue" />
                  <span className="text-gray-300">info@alphastarproperties.com</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-medium-blue transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-medium-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <span className="text-gray-400">{t('copyright')}</span>
            </div>
            <div className="flex space-x-6">
              <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-white transition-colors">
                {t('privacyPolicy')}
              </Link>
              <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-white transition-colors">
                {t('termsOfUse')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
