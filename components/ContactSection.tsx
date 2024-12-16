'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getImagePath } from '@/utils/imagePath';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${getImagePath('/images/reciption.jpg')})`
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for bookings and inquiries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Location</h3>
              <p className="text-gray-300">Hill Icon Hotel, Near Satpara Road, Skardu, Gilgit-Baltistan, Pakistan</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <p className="text-gray-300">Phone: +92 355 5559086</p>
              <p className="text-gray-300">Email: info@hilliconhotel.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Hours</h3>
              <p className="text-gray-300">Reception: 24/7</p>
              <p className="text-gray-300">Check-in: 2:00 PM</p>
              <p className="text-gray-300">Check-out: 12:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
