import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Plus, Store } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Store className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ClassiMarket</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/categorias" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/categorias' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Categorias
            </Link>
            <Link 
              to="/sobre" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/sobre' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Sobre
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/buscar" 
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              title="Buscar produtos"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link 
              to="/anunciar" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Anunciar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;