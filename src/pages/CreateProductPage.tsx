import React from 'react';
import CreateProductForm from '../components/forms/CreateProductForm';

const CreateProductPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Criar Anúncio</h1>
        <p className="text-gray-600">
          Preencha as informações abaixo para criar seu anúncio gratuito
        </p>
      </div>
      
      <CreateProductForm />
    </div>
  );
};

export default CreateProductPage;