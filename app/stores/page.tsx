"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stores = [
  {
    id: 1,
    name: "Hydra - Algiers",
    description: "Our flagship store featuring an extensive brunch menu and artisanal pastries",
    specialty: "Signature Brunches & Premium Pastries",
    address: "123 Hydra Street, Algiers",
    phone: "+213 XX XX XX XX",
    hours: "8:00 AM - 11:00 PM",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "Private dining rooms",
      "Outdoor terrace",
      "Valet parking",
      "Wheelchair accessible"
    ]
  },
  {
    id: 2,
    name: "Sidi Yahia - Algiers",
    description: "Modern café experience with a focus on creative pastries and specialty coffee",
    specialty: "Specialty Coffee & Modern Pastries",
    address: "45 Sidi Yahia Avenue, Algiers",
    phone: "+213 XX XX XX XX",
    hours: "8:00 AM - 11:00 PM",
    images: [
      "https://images.unsplash.com/photo-1600093463592-2e8d59427351?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "Coffee tasting bar",
      "Work-friendly spaces",
      "High-speed WiFi",
      "Pastry workshop viewing"
    ]
  },
  {
    id: 3,
    name: "Oran City Center",
    description: "Seaside location offering Mediterranean-inspired brunch options",
    specialty: "Mediterranean Brunch & Seafood",
    address: "78 Front de Mer, Oran",
    phone: "+213 XX XX XX XX",
    hours: "8:00 AM - 11:00 PM",
    images: [
      "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "Sea view terrace",
      "Fresh seafood bar",
      "Weekend live music",
      "Private events space"
    ]
  }
];

export default function StoresPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">Our Locations</h1>
            <p className="text-xl font-greatVibes">Experience Luxury at Every Corner</p>
          </motion.div>
        </div>
      </section>

      {/* Stores Grid */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Gallery */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: `url(${store.images[0]})` }}
                />
              </div>

              {/* Store Information */}
              <div className="p-8">
                <h2 className="text-3xl font-playfair font-bold text-primary mb-2">{store.name}</h2>
                <p className="text-accent font-semibold mb-4">{store.specialty}</p>
                <p className="text-gray-600 mb-6">{store.description}</p>

                {/* Contact Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-gray-600">{store.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-gray-600">{store.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-gray-600">{store.hours}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-3">Features & Amenities</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {store.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-accent" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    href="/menu"
                    className="flex-1 bg-primary text-white text-center py-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
                  >
                    View Menu
                  </Link>
                  <Link
                    href="/reservations"
                    className="flex-1 border-2 border-primary text-primary text-center py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Book a Table
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}