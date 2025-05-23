
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-tiktool-cyan/20 to-tiktool-magenta/20"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className={`glass-card p-10 md:p-16 rounded-2xl border border-white/10 shadow-glow-subtle hover-3d gradient-border ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-reveal">
            <span className="inline-block" style={{ animationDelay: '0ms' }}>Ready to </span>
            <span className="text-gradient glow inline-block" style={{ animationDelay: '100ms' }}>Transform</span>
            <span className="inline-block" style={{ animationDelay: '200ms' }}> Your TikTok Account?</span>
          </h2>
          
          <p 
            className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 ${
              isVisible ? 'animate-slide-up opacity-0' : 'opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            Join hundreds of users who are already using TikTool to spoof their growth.
          </p>
          
          <div 
            className={isVisible ? 'animate-slide-up opacity-0' : 'opacity-0'} 
            style={{ animationDelay: '500ms' }}
          >
            <a href="https://discord.gg/tiktool" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-tiktool-gradient hover:brightness-110 transition-all font-medium text-lg px-10 py-7 rounded-full shadow-glow group magnetic-button">
                Try It For FREE!
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
