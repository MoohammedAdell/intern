import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            <div className="shrink-0 flex items-center">
              <span className="text-xl font-extrabold tracking-tight text-indigo-600 cursor-pointer">
                ⚡ QuickShop
              </span>
            </div>

            <div className="hidden md:flex space-x-8 items-center text-2xl">
              <a href="#" className="text-indigo-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Products</a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">About</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-indigo-600 relative transition-colors">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full">0</span>
              </button>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-gray-100">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">Products</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">About</a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;