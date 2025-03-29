"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Clock, Phone, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const stores = [
  {
    id: 1,
    name: "Hydra - Algiers",
    description: "Our flagship store featuring an extensive brunch menu and artisanal pastries",
    specialty: "Signature Brunches & Premium Pastries",
    address: "123 Hydra Street, Algiers",
    phone: "+213 XX XX XX XX",
    coordinates: { lat: 36.7538, lng: 3.0588 },
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 2,
    name: "Sidi Yahia - Algiers",
    description: "Modern café experience with a focus on creative pastries and specialty coffee",
    specialty: "Specialty Coffee & Modern Pastries",
    address: "45 Sidi Yahia Avenue, Algiers",
    phone: "+213 XX XX XX XX",
    coordinates: { lat: 36.7539, lng: 3.0500 },
    images: [
      "https://images.unsplash.com/photo-1600093463592-2e8d59427351?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: 3,
    name: "Oran City Center",
    description: "Seaside location offering Mediterranean-inspired brunch options",
    specialty: "Mediterranean Brunch & Seafood",
    address: "78 Front de Mer, Oran",
    phone: "+213 XX XX XX XX",
    coordinates: { lat: 35.6969, lng: -0.6331 },
    images: [
      "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah B.",
    rating: 5,
    comment: "The best brunch experience in Algiers! The pastries are absolutely divine and the service is impeccable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    location: "Hydra Branch"
  },
  {
    id: 2,
    name: "Ahmed M.",
    rating: 5,
    comment: "A perfect blend of traditional and modern flavors. The atmosphere is sophisticated yet welcoming.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    location: "Sidi Yahia Branch"
  },
  {
    id: 3,
    name: "Lina K.",
    rating: 5,
    comment: "Their signature latte and almond croissants are worth every visit. A must-try in Oran!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    location: "Oran Branch"
  }
];

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storesRef, storesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center parallax"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-playfair font-bold mb-6"
            >
              Discover the Art of Brunch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-greatVibes mb-8"
            >
              at Brunchy DZ
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/menu"
                className="bg-accent text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                View Menu
              </Link>
              <Link
                href="/reservations"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                Book a Table
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section ref={ref} className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
              Welcome to Brunchy DZ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of traditional Algerian flavors and modern brunch culture in our elegant settings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-secondary p-8 rounded-lg text-center"
            >
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold mb-4">Multiple Locations</h3>
              <p className="text-gray-600">Find us in prime locations across Algeria</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-secondary p-8 rounded-lg text-center"
            >
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold mb-4">Opening Hours</h3>
              <p className="text-gray-600">Open daily from 8:00 AM to 11:00 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-secondary p-8 rounded-lg text-center"
            >
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold mb-4">Reservations</h3>
              <p className="text-gray-600">Book your table online or call us</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Stores Section */}
      <section ref={storesRef} className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={storesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
              Our Stores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our premium locations across Algeria
            </p>
          </motion.div>

          {/* Store Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 50 }}
                animate={storesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${store.images[0]})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-2">{store.name}</h3>
                  <p className="text-accent font-semibold mb-2">{store.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{store.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{store.address}</p>
                    <p>{store.phone}</p>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href={`/stores/${store.id}`}
                      className="flex-1 bg-primary text-white text-center py-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
                    >
                      Visit Store
                    </Link>
                    <Link
                      href="/reservations"
                      className="flex-1 border border-primary text-primary text-center py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Book a Table
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Hear from our valued guests about their Brunchy DZ experience
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="relative mb-20">
            <motion.div
              key={testimonials[testimonialIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-primary rounded-lg p-8 md:p-12 shadow-xl"
            >
              <Quote className="w-16 h-16 text-accent mb-6" />
              <div className="flex items-center mb-6">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl mb-8 italic">
                "{testimonials[testimonialIndex].comment}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[testimonialIndex].image}
                  alt={testimonials[testimonialIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-playfair font-bold text-lg">
                    {testimonials[testimonialIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[testimonialIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-accent text-white hover:bg-opacity-90 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-accent text-white hover:bg-opacity-90 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Leave a Review Button */}
          <div className="text-center">
            <button className="bg-accent text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300">
              Leave a Review
            </button>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
              Featured Menu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our signature dishes and pastries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')`
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-2">
                    Signature Dish {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Link
                    href="/menu"
                    className="inline-flex items-center text-accent hover:text-primary transition-colors duration-300"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}