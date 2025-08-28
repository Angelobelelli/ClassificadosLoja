import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { SearchFilters } from '../types';
import { categories } from '../data/mockData';
import SearchBar from '../components/search/SearchBar';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { searchProducts, loading } = useProducts();
  
  const category = categories.find(cat => cat.id === categoryId);
  const [filters, setFilters] = useState<SearchFilters>({ category: categoryId });
  
  const filteredProducts = searchProducts(filters);

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters({ ...newFilters, category: categoryId });
  };

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Categoria não encontrada</h1>
          <Link to="/categorias">
            <Button>Ver todas as categorias</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <Link to="/categorias" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar às categorias
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h1>
        <p className="text-gray-600">
          {category.count} produtos disponíveis nesta categoria
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} initialFilters={filters} />

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} em {category.name}
          </h2>
          
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="newest">Mais recentes</option>
            <option value="price-low">Menor preço</option>
            <option value="price-high">Maior preço</option>
            <option value="popular">Mais visualizados</option>
          </select>
        </div>

        <ProductGrid products={filteredProducts} loading={loading} />
      </div>
    </div>
  );
};

export default CategoryPage;