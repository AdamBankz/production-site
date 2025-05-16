import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Index = () => {
  useEffect(() => {
    document.title = "TikTool";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/f/fe/Logoforme.png?20250516192741" />
        {/* Optionally add a title here too */}
        <title>TikTool</title>
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

