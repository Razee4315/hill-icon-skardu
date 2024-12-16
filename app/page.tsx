'use client';
import HeroSection from '@/components/HeroSection';
import RoomsSection from '@/components/RoomsSection';
import RestaurantSection from '@/components/RestaurantSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: 'url(/images/front.jpg)',
          filter: 'brightness(0.7)'
        }}
      />
      <Navbar />
      <HeroSection />
      <RoomsSection />
      <RestaurantSection />
      <ActivitiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
