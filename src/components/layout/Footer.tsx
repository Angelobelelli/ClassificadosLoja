import React from 'react';
import { Store, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Store className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">ClassiMarket</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A plataforma de classificados mais completa para comprar e vender produtos 
              de forma rápida e segura. Conectamos vendedores e compradores em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="/categorias" className="text-gray-300 hover:text-white transition-colors">Categorias</a></li>
              <li><a href="/anunciar" className="text-gray-300 hover:text-white transition-colors">Anunciar Grátis</a></li>
              <li><a href="/planos" className="text-gray-300 hover:text-white transition-colors">Planos Premium</a></li>
              <li><a href="/ajuda" className="text-gray-300 hover:text-white transition-colors">Central de Ajuda</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                contato@classimarket.com
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                (11) 9999-9999
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ClassiMarket. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;