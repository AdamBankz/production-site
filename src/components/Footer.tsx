
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/30 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered logo and description */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Logoforme.png?20250516192741"
              alt="TikTool Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-gradient">TikTool</span>
          </div>
          <p className="mt-4 text-gray-400 max-w-md">
            The ultimate toolkit for TikTok creators looking to spoof their presence.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© {new Date().getFullYear()} TikTool. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* Social icons */}
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784..." />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="TikTok">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01..." />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
