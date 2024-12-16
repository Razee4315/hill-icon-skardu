'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from './BookingModal';

const activityOptions = [
  {
    name: 'Bonfire Night',
    price: 'PKR 5,000/group',
    description: 'Evening bonfire with traditional music and snacks',
    image: '/images/bone-fire.jpg',
  },
  {
    name: 'Hill Hiking',
    price: 'PKR 3,000/person',
    description: 'Guided hiking tour to nearby hills with stunning views',
    image: '/images/view-from-hill.jpg',
  },
  {
    name: 'Sightseeing Tour',
    price: 'PKR 8,000/group',
    description: 'Full-day tour to popular attractions in Skardu',
    image: '/images/trip-group.jpg',
  },
  {
    name: 'Cultural Experience',
    price: 'PKR 4,000/person',
    description: 'Traditional Balti cultural activities and demonstrations',
    image: '/images/view-from-top.jpg',
  },
];

export default function ActivitiesSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(activityOptions[0]);

  return (
    <section id="activities" className="relative min-h-screen py-20">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/roof-view.jpg)'
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
          Activities & Experiences
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {activityOptions.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden"
            >
              <div 
                className="h-48 sm:h-64 bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                style={{ backgroundImage: `url(${activity.image})` }}
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{activity.name}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{activity.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <span className="text-white font-semibold order-1 sm:order-none">{activity.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedActivity(activity);
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
        type="activity"
        title="Book an Activity"
        options={[selectedActivity]}
      />
    </section>
  );
}
