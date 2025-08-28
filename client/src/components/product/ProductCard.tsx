import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Eye, Star } from 'lucide-react';
import { Product } from '../../types';
import Card from '../ui/Card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <Card hover className="overflow-hidden">
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative">
          {/* Imagem */}
          <div className="aspect-w-16 aspect-h-12 bg-gray-200">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
          </div>
          
          {/* Badge Premium */}
          {product.isPremium && (
            <div className="absolute top-2 left-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                <Star className="w-3 h-3 mr-1" />
                Premium
              </span>
            </div>
          )}
          
          {/* Preço */}
          <div className="absolute bottom-2 right-2">
            <span className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-semibold">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        <div className="p-4">
          {/* Título */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>
          
          {/* Descrição */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          {/* Localização e Views */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {product.location.city}, {product.location.state}
            </div>
            <div className="flex items-center">
              <Eye className="w-3 h-3 mr-1" />
              {product.views} visualizações
            </div>
          </div>
          
          {/* Data */}
          <div className="mt-2 text-xs text-gray-400">
            Publicado em {formatDate(product.createdAt)}
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;