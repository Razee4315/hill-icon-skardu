'use client';
import Navbar from '@/components/Navbar';
import RestaurantSection from '@/components/RestaurantSection';
import Footer from '@/components/Footer';

export default function RestaurantPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <RestaurantSection />
      <Footer />
    </main>
  );
}
