import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { SearchFilters } from '../types';
import { categories } from '../data/mockData';
import SearchBar from '../components/search/SearchBar';
import ProductGrid from '../components/product/ProductGrid';
import CategoryGrid from '../components/category/CategoryGrid';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage: React.FC = () => {
  const { products, loading, searchProducts } = useProducts();
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});
  
  const filteredProducts = searchProducts(searchFilters);
  const featuredProducts = filteredProducts.slice(0, 8);

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };

  const stats = [
    { icon: TrendingUp, label: 'Produtos Ativos', value: '2.5K+' },
    { icon: Users, label: 'Usuários Cadastrados', value: '15K+' },
    { icon: Shield, label: 'Transações Seguras', value: '98%' },
    { icon: Zap, label: 'Tempo Médio de Venda', value: '3 dias' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Compre e Venda com
              <span className="block text-blue-200">Facilidade</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              A maior plataforma de classificados do Brasil. Milhares de produtos 
              esperando por você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buscar">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Explorar Produtos
                </Button>
              </Link>
              <Link to="/anunciar">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                  Anunciar Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Search Section */}
        <section>
          <SearchBar onSearch={handleSearch} />
        </section>

        {/* Stats */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-blue-600 mb-3 flex justify-center">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Categorias Populares</h2>
            <Link to="/categorias">
              <Button variant="outline">Ver Todas</Button>
            </Link>
          </div>
          <CategoryGrid categories={categories} />
        </section>

        {/* Featured Products */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Produtos em Destaque</h2>
            <Link to="/buscar">
              <Button variant="outline">Ver Todos</Button>
            </Link>
          </div>
          <ProductGrid products={featuredProducts} loading={loading} />
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para vender?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Crie seu anúncio em minutos e alcance milhares de compradores interessados. 
            É grátis e muito fácil!
          </p>
          <Link to="/anunciar">
            <Button size="lg">
              Criar Anúncio Grátis
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default HomePage;