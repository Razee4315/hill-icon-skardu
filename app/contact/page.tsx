'use client';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
