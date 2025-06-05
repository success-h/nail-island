'use client';

import { SectionProps } from '@/app/[lang]/dictionaries';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  User,
  Sparkles,
  Star,
  Calendar,
  Phone,
  MapPin,
  ChevronDown,
  Check,
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { useLanguage } from '@/app/context/LanguageContext';

const SUPPORTED_LANGUAGES = ['en', 'es', 'nl'];

export default function Main({ dict }: SectionProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const bookingUrl = 'https://twin-nailtechs.salonized.com/widget_bookings/new';
  const phoneNumber = '+310638666118';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 relative overflow-hidden">
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
              <DialogClose>
                <Button
                  onClick={() => handleLanguageChange('en')}
                  className={`cursor-pointer ${
                    language === 'en' ? 'bg-emerald-500 px-8 py-2' : 'bg-white'
                  }`}
                  variant="outline"
                >
                  🇺🇸 English {language === 'en' && <Check />}
                </Button>
              </DialogClose>
              <DialogClose>
                <Button
                  onClick={() => handleLanguageChange('es')}
                  className={`cursor-pointer ${
                    language === 'es'
                      ? 'bg-emerald-500 px-8 py-2'
                      : 'bg-white text-black'
                  }`}
                  variant="outline"
                >
                  Spainish 🇪🇸{language === 'es' && <Check />}
                </Button>
              </DialogClose>
              <DialogClose>
                <Button
                  onClick={() => handleLanguageChange('nl')}
                  className={`cursor-pointer ${
                    language === 'nl'
                      ? 'bg-emerald-500 px-8 py-2'
                      : 'bg-white text-black'
                  }`}
                  variant="outline"
                >
                  🇳🇱 Dutch {language === 'nl' && <Check />}
                </Button>
              </DialogClose>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 transform rotate-12 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(12deg)` }}
        ></div>
        <div
          className="absolute top-1/3 -left-20 w-64 h-64 bg-gradient-to-br from-rose-200 to-purple-200 rounded-full opacity-15"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 transform -rotate-45"
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(-45deg)`,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {dict.hero.title1}
              <span className="inline-block w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-1 animate-pulse"></span>
              {dict.hero.title2}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {dict.navigation.map((item) => (
              <a
                key={item.link}
                href={`#${item.link}`}
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href={bookingUrl}
              target="_blank"
              className="bg-gradient-to-r hover:from-purple-300 from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              {dict.navigation[5].name}
            </a>
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
              className="text-gray-700 hover:text-purple-600 transition-colors p-2"
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
                href={`#${item.link}`}
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              {dict.navigation[5].name}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-700 mb-4">
                  <Sparkles size={16} className="mr-2" />
                  {dict.hero.deal}
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-800 via-purple-700 to-pink-700 bg-clip-text text-transparent leading-tight">
                  {dict.hero.title}
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                    {dict.hero.sub_title}
                  </span>
                </h2>
                <p className="text-xl text-gray-600 font-sans leading-relaxed max-w-lg">
                  {dict.hero.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={bookingUrl}
                  target="_blank"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer hover:from-purple-300 flex items-center"
                >
                  <Calendar size={20} className="mr-2" />
                  {dict.hero.btn1}
                </a>
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  className="border-2 border-gray-300 cursor-pointer text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-purple-600 hover:text-purple-600 transition-all duration-300 flex items-center"
                >
                  <FaWhatsapp size={20} className="mr-2" />
                  {dict.hero.btn2}
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div className="text-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="inline fill-yellow-400 text-yellow-400"
                    />
                  ))}

                  <a
                    href="https://maps.app.goo.gl/yuDRYaELBkz27Sof6"
                    target="_blank"
                    className="flex text-lg items-center mt-2 gap-2"
                  >
                    <Image
                      alt="hero"
                      height={100}
                      width={100}
                      className="size-8 rounded-full"
                      src={'/Google.webp'}
                    />
                    <p> {dict.hero.reviews}</p>
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {dict.hero.experience_year}
                  </div>
                  <div className="text-sm text-gray-600"> {dict.hero.exp}</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                {/* Main hand image container */}
                <div className="w-full h-[500px] max-sm:h-[350px] flex items-center justify-center overflow-hidden border-b border-gray-300">
                  <div className="text-center text-gray-500">
                    <Image
                      alt="hero"
                      height={500}
                      width={500}
                      src={dict.hero.hero_img}
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </main>

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
                  <p className="text-3xl font-bold text-purple-600 mb-2">
                    {service.price}
                  </p>
                  <div className="text-gray-600 mb-4">{service.duration}</div>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    className="px-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-full hover:shadow-lg transition-all duration-300"
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
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ">
                  <User size={36} className="text-purple-600" />
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
        className="py-20 bg-gradient-to-r from-purple-50 to-pink-50"
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
              className="object-none"
              width={200}
              height={200}
              src="/leaf.avif"
              alt="hero"
            />
          </div>
          <Image
            className="object-cover w-full"
            width={400}
            height={400}
            src="/1.png"
            alt="hero"
          />
          <div className="p-8 flex items-center justify-center">
            <Image
              className="object-none transform -scale-x-100"
              width={200}
              height={200}
              src="/leaf.avif"
              alt="hero"
            />
          </div>
          <Image
            className="object-cover w-full"
            width={400}
            height={400}
            src="/2.png"
            alt="hero"
          />
          <div className="p-8 flex items-center justify-center">
            <Image
              className="object-none transform rotate-180"
              width={200}
              height={200}
              src="/leaf.avif"
              alt="hero"
            />
          </div>
          <Image
            className="object-cover w-full"
            width={400}
            height={400}
            src="/3.png"
            alt="hero"
          />
        </div>
        <div className="text-center">
          <a
            href="https://www.instagram.com/twin.nailtech/"
            target="_blank"
            className="mt-8 inline-flex mx-auto border-transparent bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:scale-110  transition-all duration-300 items-center"
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
        <a href="https://maps.app.goo.gl/ka3bJrMHmJXmUzbe6" target="_blank">
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
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {dict.footer.title}
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {dict.footer.desc}
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <FaInstagram size={20} />
                </div>
                <a
                  href="https://www.facebook.com/nailsbynailsaloon/"
                  target="_blank"
                  className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <FaFacebook size={20} />
                </a>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
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
