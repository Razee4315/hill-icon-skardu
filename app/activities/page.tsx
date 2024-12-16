'use client';
import Navbar from '@/components/Navbar';
import ActivitiesSection from '@/components/ActivitiesSection';
import Footer from '@/components/Footer';

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <ActivitiesSection />
      <Footer />
    </main>
  );
}
