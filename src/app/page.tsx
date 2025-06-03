"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Award,
  Sparkles,
  Star,
  Calendar,
  Phone,
  MapPin,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const ModernNailsLanding = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Absolutely stunning work! My nails have never looked better.",
    },
    {
      name: "Jessica L.",
      rating: 5,
      text: "The attention to detail is incredible. Highly recommend!",
    },
    {
      name: "Emma K.",
      rating: 5,
      text: "Such a relaxing experience with amazing results every time.",
    },
  ];

  const services = [
    { name: "Classic Manicure", price: "€35", duration: "45 min" },
    { name: "Gel Manicure", price: "€50", duration: "60 min" },
    { name: "Nail Art Design", price: "€65", duration: "90 min" },
    { name: "Acrylic Extensions", price: "€70", duration: "120 min" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 relative overflow-hidden">
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
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Super N
              <span className="inline-block w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-1 animate-pulse"></span>
              ils
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {["Services", "Testimonials", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://cal.com/dtdigital/30min"
              target="_blank"
              className="bg-gradient-to-r hover:from-purple-300 from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              Book Now
            </a>
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
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {["About", "Services", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Book Now
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
                  Deal of the day - 20% off Nail Enhancement!
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-800 via-purple-700 to-pink-700 bg-clip-text text-transparent leading-tight">
                  Pamper Your
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                    Nails
                  </span>
                </h2>
                <p className="text-xl text-gray-600 font-sans leading-relaxed max-w-lg">
                  Experience luxury nail care with our expert artists using
                  premium, eco-friendly products in a relaxing atmosphere.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://cal.com/dtdigital/30min"
                  target="_blank"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer hover:from-purple-300 flex items-center"
                >
                  <Calendar size={20} className="mr-2" />
                  BOOK APPOINTMENT
                </a>
                <a
                  href="https://wa.me/+310622558806"
                  target="_blank"
                  className="border-2 border-gray-300 cursor-pointer text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-purple-600 hover:text-purple-600 transition-all duration-300 flex items-center"
                >
                  <FaWhatsapp size={20} className="mr-2" />
                  Call Us
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
                      src={"/Google.webp"}
                    />
                    <p>500+ reviews</p>
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
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
                      src={"/hand.webp"}
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
              Our Services
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From classic manicures to intricate nail art, we offer premium
              services tailored to your style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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
                    href="https://cal.com/dtdigital/30min"
                    target="_blank"
                    className="px-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Book Now
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
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ">
                <User size={36} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Expert Nail Artists
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our nail artists are licensed technicians with years of
                experience and artistic flair, ensuring perfect results every
                time.
              </p>
            </div>

            {/* Quality Services */}
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ">
                <Award size={36} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Premium Experience
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Relax in our luxurious salon environment designed for comfort
                and tranquility while receiving top-tier nail care services.
              </p>
            </div>

            {/* Organic Nail Products */}
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ">
                <Sparkles size={36} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Eco-Friendly Products
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We use only vegan, cruelty-free, and environmentally conscious
                products that are gentle on your nails and the planet.
              </p>
            </div>
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
              What Our Clients Say
            </h3>
            <p className="text-xl text-gray-600">
              Real reviews from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                src={"/Google.webp"}
              />
              <p>500+ reviews</p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Super Nails
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your premier destination for luxury nail care and stunning nail
                art. Book your appointment today and treat yourself to the
                pampering you deserve.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <FaInstagram size={20} />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <FaFacebook size={20} />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <FaTwitter size={20} />
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone size={16} className="mr-3" />
                  <span>+31 0622558806</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-3" />
                  <span>Naaldwijkseweg 6, 2691 RH 's-Gravenzande</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Super Nails. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernNailsLanding;
