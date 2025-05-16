import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "TikTool";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>TikTool</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/f/fe/Logoforme.png?20250516192741" />
      </Head>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
