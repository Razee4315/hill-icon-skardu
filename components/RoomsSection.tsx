'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from './BookingModal';

const roomOptions = [
  {
    name: 'Deluxe Room',
    price: 'PKR 15,000/night',
    description: 'Spacious room with mountain view, king-size bed, and modern amenities.',
    image: '/images/room-deluxe.jpg',
  },
  {
    name: 'Queen Room',
    price: 'PKR 12,000/night',
    description: 'Comfortable room with queen-size bed and private bathroom.',
    image: '/images/double-bed-queen.jpg',
  },
  {
    name: 'Double Room',
    price: 'PKR 10,000/night',
    description: 'Cozy room with two single beds, perfect for friends or family.',
    image: '/images/double-bed.jpg',
  },
];

export default function RoomsSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);

  return (
    <section id="rooms" className="relative min-h-screen py-20">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/view-from-top.jpg)'
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
          className="text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12"
        >
          Our Rooms
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {roomOptions.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden"
            >
              <div 
                className="h-48 sm:h-64 bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                style={{ backgroundImage: `url(${room.image})` }}
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{room.name}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{room.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <span className="text-white font-semibold order-1 sm:order-none">{room.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedRoom(room);
                      setIsBookingOpen(true);
                    }}
                    className="w-full sm:w-auto bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors order-2 sm:order-none"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        type="room"
        title="Book a Room"
        options={[selectedRoom]}
      />
    </section>
  );
}
