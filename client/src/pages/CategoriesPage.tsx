import React from 'react';
import { categories } from '../data/mockData';
import CategoryGrid from '../components/category/CategoryGrid';

const CategoriesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Todas as Categorias</h1>
        <p className="text-gray-600">
          Explore produtos por categoria e encontre exatamente o que precisa
        </p>
      </div>
      
      <CategoryGrid categories={categories} />
    </div>
  );
};

export default CategoriesPage;