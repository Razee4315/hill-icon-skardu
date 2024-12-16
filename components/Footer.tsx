'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const footerSections = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Rooms', href: '/rooms' },
      { name: 'Restaurant', href: '/restaurant' },
      { name: 'Activities', href: '/activities' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Skardu Valley, Gilgit-Baltistan', href: '#' },
      { name: 'Pakistan', href: '#' },
      { name: 'Phone: +92 XXX XXXXXXX', href: '#' },
      { name: 'Email: info@hilliconskardu.com', href: '#' },
    ],
  },
  {
    title: 'Follow Us',
    links: [
      { name: 'Facebook', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <motion.span
                className="text-2xl font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Hill Icon
              </motion.span>
            </Link>
            <p className="mt-4 text-gray-400">
              A luxury retreat nestled in the heart of Skardu Valley
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <motion.span
                        className="text-gray-400 hover:text-white cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hill Icon Skardu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
