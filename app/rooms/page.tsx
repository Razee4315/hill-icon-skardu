'use client';
import Navbar from '@/components/Navbar';
import RoomsSection from '@/components/RoomsSection';
import Footer from '@/components/Footer';

export default function RoomsPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <RoomsSection />
      <Footer />
    </main>
  );
}
