import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { SearchFilters } from '../types';
import SearchBar from '../components/search/SearchBar';
import ProductGrid from '../components/product/ProductGrid';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { searchProducts, loading } = useProducts();
  
  const initialFilters: SearchFilters = {
    query: searchParams.get('q') || '',
    category: searchParams.get('categoria') || '',
    minPrice: searchParams.get('min') ? Number(searchParams.get('min')) : undefined,
    maxPrice: searchParams.get('max') ? Number(searchParams.get('max')) : undefined,
    city: searchParams.get('cidade') || '',
    state: searchParams.get('estado') || ''
  };

  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const filteredProducts = searchProducts(filters);

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Buscar Produtos</h1>
        <p className="text-gray-600">
          Encontre exatamente o que você está procurando
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} initialFilters={initialFilters} />

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </h2>
          
          {/* Sort Options */}
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

export default SearchPage;