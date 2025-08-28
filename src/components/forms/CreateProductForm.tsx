import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { CreateProductForm as CreateProductFormType } from '../../types';
import { useProducts } from '../../hooks/useProducts';
import { categories } from '../../data/mockData';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Card from '../ui/Card';

const createProductSchema = z.object({
  title: z.string().min(5, 'Título deve ter pelo menos 5 caracteres'),
  description: z.string().min(20, 'Descrição deve ter pelo menos 20 caracteres'),
  price: z.number().min(0.01, 'Preço deve ser maior que zero'),
  category: z.string().min(1, 'Selecione uma categoria'),
  images: z.array(z.string().url('URL da imagem inválida')).min(1, 'Adicione pelo menos uma imagem'),
  sellerName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  sellerPhone: z.string().min(10, 'Telefone inválido'),
  sellerWhatsapp: z.string().optional(),
  city: z.string().min(2, 'Cidade deve ter pelo menos 2 caracteres'),
  state: z.string().min(2, 'Selecione um estado')
});

const CreateProductForm: React.FC = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch
  } = useForm<CreateProductFormType>({
    resolver: zodResolver(createProductSchema)
  });

  const images = watch('images') || [];

  const categoryOptions = [
    { value: '', label: 'Selecione uma categoria' },
    ...categories.map(cat => ({ value: cat.id, label: cat.name }))
  ];

  const stateOptions = [
    { value: '', label: 'Selecione um estado' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'PR', label: 'Paraná' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'BA', label: 'Bahia' },
    { value: 'GO', label: 'Goiás' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'CE', label: 'Ceará' }
  ];

  const addImageUrl = () => {
    const url = prompt('Digite a URL da imagem:');
    if (url) {
      setValue('images', [...images, url]);
    }
  };

  const removeImage = (index: number) => {
    setValue('images', images.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: CreateProductFormType) => {
    try {
      const productData = {
        ...data,
        seller: {
          name: data.sellerName,
          phone: data.sellerPhone,
          whatsapp: data.sellerWhatsapp
        },
        location: {
          city: data.city,
          state: data.state
        },
        isPremium: false
      };

      addProduct(productData);
      navigate('/');
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Criar Anúncio</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Informações do Produto */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Informações do Produto</h2>
            
            <Input
              {...register('title')}
              label="Título do anúncio"
              placeholder="Ex: iPhone 14 Pro Max 256GB"
              error={errors.title?.message}
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descrição
              </label>
              <textarea
                {...register('description')}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Descreva seu produto em detalhes..."
              />
              {errors.description && (
                <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                {...register('price', { valueAsNumber: true })}
                type="number"
                label="Preço (R$)"
                placeholder="0,00"
                min="0"
                step="0.01"
                error={errors.price?.message}
              />
              
              <Select
                {...register('category')}
                label="Categoria"
                options={categoryOptions}
                error={errors.category?.message}
              />
            </div>
          </div>

          {/* Imagens */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Imagens</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`Imagem ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addImageUrl}
                className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                + Adicionar Imagem
              </button>
            </div>
            
            {errors.images && (
              <p className="text-sm text-red-600">{errors.images.message}</p>
            )}
          </div>

          {/* Informações do Vendedor */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Informações de Contato</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                {...register('sellerName')}
                label="Seu nome"
                placeholder="Nome completo"
                error={errors.sellerName?.message}
              />
              
              <Input
                {...register('sellerPhone')}
                label="Telefone"
                placeholder="(11) 99999-9999"
                error={errors.sellerPhone?.message}
              />
            </div>
            
            <Input
              {...register('sellerWhatsapp')}
              label="WhatsApp (opcional)"
              placeholder="5511999999999"
              error={errors.sellerWhatsapp?.message}
            />
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Localização</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                {...register('city')}
                label="Cidade"
                placeholder="Ex: São Paulo"
                error={errors.city?.message}
              />
              
              <Select
                {...register('state')}
                label="Estado"
                options={stateOptions}
                error={errors.state?.message}
              />
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/')}
              className="w-full sm:w-auto"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1"
            >
              {isSubmitting ? 'Criando anúncio...' : 'Criar Anúncio Grátis'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateProductForm;