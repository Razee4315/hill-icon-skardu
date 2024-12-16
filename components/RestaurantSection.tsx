'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from './BookingModal';
import { getImagePath } from '@/utils/imagePath';

const tableOptions = [
  {
    name: 'Regular Dining',
    price: 'PKR 1,500/person',
    description: 'Indoor dining with mountain view',
  },
  {
    name: 'Rooftop Dining',
    price: 'PKR 2,000/person',
    description: 'Outdoor dining with panoramic views of Skardu Valley',
  },
  {
    name: 'Private Dining',
    price: 'PKR 2,500/person',
    description: 'Exclusive dining experience for special occasions',
  },
];

export default function RestaurantSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(tableOptions[0]);

  const handleBooking = (option: typeof tableOptions[0]) => {
    setSelectedOption(option);
    setIsBookingOpen(true);
  };

  return (
    <section id="restaurant" className="relative min-h-screen py-20">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${getImagePath('/images/mess.jpg')})`
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Restaurant
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 sm:p-8 mb-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Our Cuisine</h3>
            <p className="text-gray-300 mb-6">
              Experience the finest blend of local Baltistani specialties and international cuisine. 
              Our expert chefs prepare dishes using fresh, local ingredients to create unforgettable dining experiences.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBooking(tableOptions[0])}
              className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book a Table
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Local Specialties</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Traditional Baltistani Thali</li>
                <li>• Chapshoro</li>
                <li>• Mamtu</li>
                <li>• Prapu</li>
                <li>• Fresh Trout Fish</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">International Cuisine</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Continental Breakfast</li>
                <li>• Italian Pasta</li>
                <li>• Chinese Specialties</li>
                <li>• BBQ Selection</li>
                <li>• Dessert Collection</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="restaurant"
        title="Book a Table"
        options={[selectedOption]}
      />
    </section>
  );
}
