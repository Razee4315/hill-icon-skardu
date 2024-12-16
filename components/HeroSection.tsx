'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from './BookingModal';
import { getImagePath } from '@/utils/imagePath';

export default function HeroSection() {
  const [bookingType, setBookingType] = useState<'room' | 'restaurant' | 'activity' | null>(null);

  const getBookingTitle = () => {
    if (!bookingType) return 'Book a Room';
    return `Book a ${bookingType.charAt(0).toUpperCase() + bookingType.slice(1)}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${getImagePath('/images/front.jpg')})`
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-white text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hill Icon Skardu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          Experience luxury and comfort with breathtaking views of the Karakoram Range. 
          Your perfect stay in the heart of Skardu Valley.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBookingType('room')}
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Room
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBookingType('activity')}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Book Activity
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBookingType('restaurant')}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Book Table
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingType !== null}
        onClose={() => setBookingType(null)}
        type={bookingType || 'room'}
        title={getBookingTitle()}
        options={[]}
      />
    </section>
  );
}
