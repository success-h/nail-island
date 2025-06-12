'use client';

import { SectionProps } from '@/app/[lang]/dictionaries';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  User,
  Star,
  Phone,
  MapPin,
  ChevronDown,
  Check,
} from 'lucide-react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { useLanguage } from '@/app/context/LanguageContext';
import Link from 'next/link';

const SUPPORTED_LANGUAGES = ['en', 'es', 'nl'];

export default function Main({ dict }: SectionProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const bookingUrl = 'https://widget.treatwell.nl/en/place/100048213/menu';
  // const phoneNumber = '+31621668048';
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (lang: string) => {
    const segments = pathname.split('/');

    if (SUPPORTED_LANGUAGES.includes(segments[1])) {
      segments[1] = lang;
    } else {
      segments.splice(1, 0, lang);
    }

    const newPath = segments.join('/') || '/';
    localStorage.setItem('preferredLanguage', lang);
    //@ts-expect-error error
    setLanguage(lang);
    router.push(newPath);
  };

  // const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-pink-50 relative overflow-hidden">
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-black text-3xl">
              Select Language
            </DialogTitle>
            <DialogDescription>
              Please select your preferred language
            </DialogDescription>
            <div className="mx-auto my-4 flex gap-4">
              <Button
                onClick={() => handleLanguageChange('en')}
                className={`cursor-pointer ${
                  language === 'en' ? 'bg-pink-500 px-8 py-2' : 'bg-white'
                }`}
                variant="outline"
              >
                🇺🇸 English {language === 'en' && <Check />}
              </Button>
              <Button
                onClick={() => handleLanguageChange('es')}
                className={`cursor-pointer ${
                  language === 'es'
                    ? 'bg-pink-500 px-8 py-2'
                    : 'bg-white text-black'
                }`}
                variant="outline"
              >
                Spainish 🇪🇸{language === 'es' && <Check />}
              </Button>
              <Button
                onClick={() => handleLanguageChange('nl')}
                className={`cursor-pointer ${
                  language === 'nl'
                    ? 'bg-pink-500 px-8 py-2'
                    : 'bg-white text-black'
                }`}
                variant="outline"
              >
                🇳🇱 Dutch {language === 'nl' && <Check />}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-32 w-96 h-96 bg-gradient-to-br from-amber-200 to-pink-200 rounded-full opacity-20 transform rotate-12 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(12deg)` }}
        ></div>
        <div
          className="absolute top-1/3 -left-20 w-64 h-64 bg-gradient-to-br from-gray-200 to-amber-200 rounded-full opacity-15"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-200 to-amber-200 rounded-full opacity-20 transform -rotate-45"
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(-45deg)`,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/80 text-black backdrop-blur-md shadow-lg'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className={` ${
                scrollY > 50
                  ? 'from-amber-400 to-pink-400'
                  : 'from-blue-100 to-green-100'
              } text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent`}
            >
              {dict.hero.title1}
              <span
                className={` ${
                  scrollY > 50
                    ? 'from-amber-400 to-pink-400'
                    : 'from-blue-00 to-green-100'
                } inline-block w-3 h-3 bg-gradient-to-r  rounded-full mx-1 animate-pulse`}
              ></span>
              {dict.hero.title2}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {dict.navigation.map((item) => (
              <a
                key={item.link}
                href={`${item.link}`}
                className={` ${
                  scrollY > 50 ? 'text-gray-700' : 'text-white font-bold'
                } hover:text-amber-600 transition-all duration-300 font-medium relative group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Link
              href={bookingUrl}
              target="_blank"
              className="bg-gradient-to-r hover:from-amber-300 from-amber-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              {dict.navigation[5].name}
            </Link>
            <Button variant={'ghost'} onClick={() => setShowModal(true)}>
              <div className="cursor-pointer py-1 flex items-center text-lg uppercase border border-black px-4 rounded-full bg-transparent">
                {language === 'en' ? '🇺🇸' : language === 'es' ? '🇪🇸' : '🇳🇱'}{' '}
                {language}
                <ChevronDown />{' '}
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-amber-600 transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {dict.navigation.map((item) => (
              <a
                key={item.link}
                href={`${item.link}`}
                className="block py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-amber-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              {dict.navigation[5].name}
            </button>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-[url('/image1.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/70 via-purple-500/70 to-indigo-600/70 opacity-70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-6xl md:text-8xl font-light mb-4">
            {dict.hero.title}{' '}
            <span className="relative">
              {dict.hero.sub_title}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-pink-400 transform rotate-1"></div>
            </span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-light mb-12">
            {dict.hero.sub_title2}
          </h3>

          <button
            onClick={scrollToServices}
            className="bg-transparent border-2 border-white px-8 py-3 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            {dict.navigation[5].name}
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="w-8 h-8 text-white cursor-pointer"
            onClick={scrollToServices}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              {dict.service.title}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {dict.service.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.service.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200"
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h4>
                  <p className="text-3xl font-bold text-amber-600 mb-2">
                    {service.price}
                  </p>
                  <div className="text-gray-600 mb-4">{service.duration}</div>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    className="px-4 w-full bg-gradient-to-r from-amber-600 to-pink-600 text-white py-2 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    {service.book}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Expert Nail Artists */}
            {dict.feature.map((item, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ">
                  <User size={36} className="text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-r from-pink-50 to-amber-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              {dict.testimonial.title}
            </h3>
            <p className="text-xl text-gray-600">{dict.testimonial.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dict.testimonial.testimonies.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto flex justify-center">
          <a
            href="https://maps.app.goo.gl/yuDRYaELBkz27Sof6"
            target="_blank"
            className="mt-12 text-center inline-block"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="inline fill-yellow-400 text-yellow-400"
              />
            ))}

            <div className="flex text-lg items-center mt-2 gap-2">
              <Image
                alt="hero"
                height={100}
                width={100}
                className="size-8 rounded-full"
                src={'/Google.webp'}
              />
              <p>{dict.testimonial.review}</p>
            </div>
          </a>
        </div>
      </section>
      <section className="py-20" id="gallery">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            {dict.gallery.title}
          </h3>
          <p className="text-xl text-gray-600"> {dict.gallery.desc}</p>
        </div>
        <div className="lg:max-w-2/4 mx-auto grid grid-cols-3 bg-white">
          <div className="p-8 flex items-center justify-center">
            <Image
              className="object-none max-md:object-contain"
              width={200}
              height={200}
              src="/leaf.avif"
              alt="hero"
            />
          </div>
          <Image
            className="bg-cover object-cover w-full h-full"
            width={400}
            height={400}
            src="/1.png"
            alt="hero"
          />
          <div className="p-8 flex items-center justify-center">
            <Image
              className="object-none max-md:object-contain transform -scale-x-100"
              width={200}
              height={200}
              src="/leaf.avif"
              alt="hero"
            />
          </div>
          <Image
            className="bg-cover object-cover w-full h-full"
            width={400}
            height={400}
            src="/2.png"
            alt="hero"
          />
          <div className="p-8 flex items-center justify-center">
            <Image
              className="object-none transform max-md:object-contain rotate-180"
              width={200}
              height={200}
              src="/leaf.avif"
              alt="hero"
            />
          </div>
          <Image
            className="bg-cover object-cover w-full h-full"
            width={400}
            height={400}
            src="/3.png"
            alt="hero"
          />
        </div>
        <div className="text-center">
          <a
            href="https://www.instagram.com/ela.beauty.nails/"
            target="_blank"
            className="mt-8 inline-flex mx-auto border-transparent bg-gradient-to-r from-amber-500 to-pink-500 cursor-pointer text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:scale-110  transition-all duration-300 items-center"
          >
            <FaInstagram size={30} className="mr-2" />
            {dict.gallery.see_more}
          </a>
        </div>
      </section>

      <section className="py-20" id="shop">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            {dict.shop.title}
          </h3>
        </div>
        <div className="container max-sm:px-4 mx-auto grid gap-4 xl:grid-cols-4 md:grid-cols-2">
          {dict.shop.items.map((item, index) => (
            <div key={index} className="border-pink-100 border">
              <Image
                className="object-cover w-full"
                width={400}
                height={400}
                src={item.image}
                alt="hero"
              />
              <div className="text-center p-4">
                <p className="text-3xl font-bold italic font-mono">
                  {item.name}
                </p>
                <p className="uppercase my-2">{item.des}</p>
                <p className="font-bold">{item.price}</p>
                <button className="mt-2 py-2 px-4 border border-gray-400">
                  {item.book}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="pt-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800">{dict.contact}</h3>
        </div>
        <a href="https://maps.app.goo.gl/n28dFQxfB47mxStd6" target="_blank">
          <Image
            width={2000}
            height={400}
            className="object-cover max-lg:scale-200 hover:scale-105 w-full transition-all duration-300"
            src="/location.png"
            alt="address"
          />
        </a>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
                {dict.footer.title}
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {dict.footer.desc}
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <FaInstagram size={20} />
                </div>
                <a
                  href="https://www.facebook.com/nailsbynailsaloon/"
                  target="_blank"
                  className="w-10 h-10 bg-gradient-to-r from-amber-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <FaFacebook size={20} />
                </a>
                <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <FaTwitter size={20} />
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">
                {dict.footer.contact_info.title}
              </h5>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone size={16} className="mr-3" />
                  <span>+31 {dict.footer.contact_info.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-3" />
                  <span> {dict.footer.contact_info.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {dict.footer.all_rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
