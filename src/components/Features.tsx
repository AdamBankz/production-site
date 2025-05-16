
import { Circle, Eye, Bot, Search, Share, Layout } from 'lucide-react';

const featureItems = [
  {
    icon: <Eye className="h-8 w-8 text-tiktool-cyan" />,
    title: "Free and Premium",
    description: "We offer a free tier for our users. Allowing you to see how it works & make a decision whether to upgrade or not."
  },
  {
    icon: <Bot className="h-8 w-8 text-tiktool-magenta" />,
    title: "Military-grade Robotics",
    description: "Not only are we undetectable on TikTok, but our premium tier bypasses Whop's machine learning algorithm."
  },
  {
    icon: <Search className="h-8 w-8 text-tiktool-cyan" />,
    title: "Search Exposure",
    description: "Stay on top of TikTok searches, increasing your exposure and natural growth."
  },
  {
    icon: <Circle className="h-8 w-8 text-tiktool-magenta" />,
    title: "24/7 Support",
    description: "Every one of our users are priority. If you need support, create a ticket and we will be there ASAP."
  },
  {
    icon: <Share className="h-8 w-8 text-tiktool-cyan" />,
    title: "No downloads",
    description: "We host the bot ourselves. Meaning you do not have to download anything to use it and that it stays online 24/7."
  },
  {
    icon: <Layout className="h-8 w-8 text-tiktool-magenta" />,
    title: "Low Downtime",
    description: "TikTook has an incredible development team, meaning updates are pushed hours after being patched."
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
            Everything you need to create your TikTok presence
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
