import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/30 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex items-center">
            <img 
              src="https://github.com/user-attachments/assets/c6bc3055-87e9-4e08-a682-01c3605a6570"
              alt="TikTool Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-gradient">TikTool</span>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0 max-w-md">
            The ultimate toolkit for TikTok creators looking to spoof their presence.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© {new Date().getFullYear()} TikTool. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* Twitter */}
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43..." clipRule="evenodd" />
              </svg>
            </a>

            {/* TikTok */}
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">TikTok</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83..." />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
