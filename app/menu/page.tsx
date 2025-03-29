"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const menuCategories = [
  "All Day Brunch",
  "Pastries",
  "Drinks",
  "Specials"
];

const menuItems: Record<string, MenuItem[]> = {
  "All Day Brunch": [
    {
      name: "Eggs Benedict Royal",
      description: "Poached eggs, smoked salmon, spinach, hollandaise sauce on artisanal bread",
      price: "1800 DA",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Avocado Toast Deluxe",
      description: "Crushed avocado, poached eggs, cherry tomatoes, feta on sourdough",
      price: "1500 DA",
      image: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "French Toast Supreme",
      description: "Brioche, berries, maple syrup, whipped cream, gold leaf",
      price: "1600 DA",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "Pastries": [
    {
      name: "Almond Croissant",
      description: "Buttery croissant filled with almond cream and toasted almonds",
      price: "450 DA",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Pain au Chocolat",
      description: "Classic chocolate-filled French pastry",
      price: "400 DA",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Berry Danish",
      description: "Flaky pastry with mixed berries and vanilla cream",
      price: "420 DA",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "Drinks": [
    {
      name: "Signature Latte",
      description: "House-blend espresso, steamed milk, gold dust",
      price: "550 DA",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Fresh Orange Juice",
      description: "Freshly squeezed premium oranges",
      price: "400 DA",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Green Detox",
      description: "Spinach, apple, cucumber, ginger, mint",
      price: "600 DA",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "Specials": [
    {
      name: "Brunchy Royal Platter",
      description: "Selection of premium pastries, eggs, fruits, and drinks for two",
      price: "4500 DA",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Weekend Feast",
      description: "Chef's selection of seasonal specialties and signature dishes",
      price: "3800 DA",
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
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
            backgroundImage: "url('https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')"
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
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">Our Menu</h1>
            <p className="text-xl font-greatVibes">Culinary Excellence in Every Bite</p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-opacity-80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Items */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-playfair font-bold text-primary">{item.name}</h3>
                  <span className="text-accent font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}