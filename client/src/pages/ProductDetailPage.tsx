import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Eye, Calendar, MessageCircle, Phone, Star, Share2 } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { categories } from '../data/mockData';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
          <Link to="/">
            <Button>Voltar ao início</Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(cat => cat.id === product.category);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Olá! Tenho interesse no produto: ${product.title}`);
    const whatsappNumber = product.seller.whatsapp || product.seller.phone.replace(/\D/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-blue-600 transition-colors">Início</Link>
        <span>/</span>
        <Link to={`/categoria/${product.category}`} className="hover:text-blue-600 transition-colors">
          {category?.name}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.title}</span>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos resultados
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Images and Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Gallery */}
          <Card className="overflow-hidden">
            <div className="aspect-w-16 aspect-h-12">
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {/* Product Details */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>
                {product.isPremium && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    <Star className="w-4 h-4 mr-1" />
                    Anúncio Premium
                  </span>
                )}
              </div>
              <Button variant="ghost" onClick={handleShare}>
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <div className="text-3xl font-bold text-blue-600 mb-6">
              {formatPrice(product.price)}
            </div>

            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Descrição</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* Product Info */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {product.location.city}, {product.location.state}
              </div>
              <div className="flex items-center text-gray-600">
                <Eye className="w-4 h-4 mr-2" />
                {product.views} visualizações
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(product.createdAt)}
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Card */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">{product.seller.name}</p>
                <p className="text-sm text-gray-600">Vendedor</p>
              </div>

              <div className="space-y-3">
                {product.seller.whatsapp && (
                  <Button 
                    onClick={handleWhatsAppContact}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                )}
                
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  {product.seller.phone}
                </Button>
              </div>

              <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Dicas de segurança:</p>
                <ul className="space-y-1">
                  <li>• Prefira encontros em locais públicos</li>
                  <li>• Verifique o produto antes de pagar</li>
                  <li>• Desconfie de preços muito baixos</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Premium Upgrade */}
          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Destaque seu anúncio
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Apareça no topo dos resultados e venda mais rápido!
            </p>
            <Button variant="outline" size="sm" className="w-full border-yellow-300 text-yellow-700 hover:bg-yellow-50">
              Tornar Premium - R$ 9,90
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;