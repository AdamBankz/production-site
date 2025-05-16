
import { Circle, Eye, Bot, Search, Share, Layout } from 'lucide-react';

const featureItems = [
  {
    icon: <Eye className="h-8 w-8 text-tiktool-cyan" />,
    title: "Content Analysis",
    description: "Deep analysis of your content performance with AI-powered insights to understand what works and why."
  },
  {
    icon: <Bot className="h-8 w-8 text-tiktool-magenta" />,
    title: "AI Recommendations",
    description: "Get personalized recommendations to improve your content strategy based on trending patterns."
  },
  {
    icon: <Search className="h-8 w-8 text-tiktool-cyan" />,
    title: "Trend Detection",
    description: "Stay ahead of the curve with real-time trend analysis and notifications for relevant opportunities."
  },
  {
    icon: <Circle className="h-8 w-8 text-tiktool-magenta" />,
    title: "Competitor Insights",
    description: "Track and analyze competitor strategies to benchmark your performance and find new opportunities."
  },
  {
    icon: <Share className="h-8 w-8 text-tiktool-cyan" />,
    title: "Performance Metrics",
    description: "Comprehensive dashboard with actionable metrics to track growth and engagement over time."
  },
  {
    icon: <Layout className="h-8 w-8 text-tiktool-magenta" />,
    title: "Content Calendar",
    description: "Plan your content strategy with an AI-optimized posting schedule to maximize reach and engagement."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to analyze, optimize and grow your TikTok presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
