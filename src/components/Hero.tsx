
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // This ensures the video plays as soon as it's loaded
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay was prevented:', err);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-tiktool-cyan/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/2 w-[600px] h-[600px] bg-tiktool-magenta/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-16">
        <div className="mb-8">
          <img 
            src="https://private-user-images.githubusercontent.com/208094155/444645400-c6bc3055-87e9-4e08-a682-01c3605a6570.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc0MTkyMDksIm5iZiI6MTc0NzQxODkwOSwicGF0aCI6Ii8yMDgwOTQxNTUvNDQ0NjQ1NDAwLWM2YmMzMDU1LTg3ZTktNGUwOC1hNjgyLTAxYzM2MDVhNjU3MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNlQxODA4MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMGVjNjU3NWFjOThjN2YxMjFkMTRiMmIxOWE1YTA0NGE1MmY5OGFiNGMzYWRiMzZjNGU3OTY3Y2YyZDc1OWE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.GP-5G0lAZi0qDrXylp_ovmUZfxJdmr6VKyorreZVoo8" 
            alt="TikTool Logo" 
            className="h-24 md:h-32 w-auto drop-shadow-[0_0_15px_rgba(0,229,229,0.5)] animate-float"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8 animate-fade-in">
          Supercharge Your <span className="text-gradient glow">TikTok</span> <span className="block mt-2">Content</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl mb-12 animate-fade-in opacity-0 animation-delay-200">
          The all-in-one AI tool that helps creators analyze, optimize, and elevate their TikTok presence.
        </p>
        
        <div className="animate-fade-in opacity-0 animation-delay-300">
          <Button size="lg" className="bg-tiktool-gradient hover:brightness-110 transition-all font-medium text-lg px-10 py-7 rounded-full shadow-glow group">
            Get Started Free
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="mt-16 glass-card p-6 rounded-xl max-w-5xl w-full transform hover:scale-[1.02] transition-all duration-500 shadow-glow-subtle">
          <div className="aspect-video rounded-md bg-black/50 overflow-hidden border border-white/10 relative group">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://www.youtube.com/a5c013c9-39f6-4f7e-bd37-51ee645ca98a" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-gradient glow text-xl font-semibold">
              TikTool in Action
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
