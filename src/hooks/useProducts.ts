import { useState, useEffect } from 'react';
import { Product, SearchFilters } from '../types';
import { mockProducts } from '../data/mockData';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento da API
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  const searchProducts = (filters: SearchFilters): Product[] => {
    return products.filter(product => {
      if (filters.query && !product.title.toLowerCase().includes(filters.query.toLowerCase()) &&
          !product.description.toLowerCase().includes(filters.query.toLowerCase())) {
        return false;
      }
      
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      
      if (filters.minPrice && product.price < filters.minPrice) {
        return false;
      }
      
      if (filters.maxPrice && product.price > filters.maxPrice) {
        return false;
      }
      
      if (filters.city && product.location.city.toLowerCase() !== filters.city.toLowerCase()) {
        return false;
      }
      
      if (filters.state && product.location.state.toLowerCase() !== filters.state.toLowerCase()) {
        return false;
      }
      
      return true;
    }).sort((a, b) => {
      // Premium products first
      if (a.isPremium && !b.isPremium) return -1;
      if (!a.isPremium && b.isPremium) return 1;
      
      // Then by creation date (newest first)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  };

  const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt' | 'views'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      views: 0
    };
    setProducts(prev => [newProduct, ...prev]);
    return newProduct;
  };

  return {
    products,
    loading,
    searchProducts,
    getProductById,
    addProduct
  };
};