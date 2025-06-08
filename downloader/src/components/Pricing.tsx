
import { Button } from '@downloader/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for beginners",
    features: [
      "Content performance analytics",
      "Basic trend detection",
      "3 competitor analysis",
      "Weekly insights report"
    ],
    buttonText: "Get Started",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Ideal for growing creators",
    features: [
      "Everything in Basic",
      "Advanced AI recommendations",
      "10 competitor tracking",
      "Content calendar",
      "Priority support",
      "Custom insights dashboard"
    ],
    buttonText: "Try Pro",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    description: "For professional creators",
    features: [
      "Everything in Pro",
      "Unlimited competitor tracking",
      "Advanced trend predictions",
      "API access",
      "Dedicated account manager",
      "Custom integrations"
    ],
    buttonText: "Contact Sales",
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-tiktool-cyan/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-tiktool-magenta/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your TikTok journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] ${
                plan.highlighted ? 'border-tiktool-gradient border-2 glow-cyan' : 'border border-white/10'
              }`}
            >
              <div className={`p-6 ${plan.highlighted ? 'bg-gradient-to-r from-tiktool-cyan/20 to-tiktool-magenta/20' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted ? 'bg-tiktool-gradient' : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>

              <div className="p-6 bg-black/20">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-tiktool-cyan mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
