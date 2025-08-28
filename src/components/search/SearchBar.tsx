import React from 'react';
import { useForm } from 'react-hook-form';
import { Search, MapPin } from 'lucide-react';
import { SearchFilters } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { categories } from '../../data/mockData';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  initialFilters?: SearchFilters;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialFilters = {} }) => {
  const { register, handleSubmit, watch } = useForm<SearchFilters>({
    defaultValues: initialFilters
  });

  const categoryOptions = [
    { value: '', label: 'Todas as categorias' },
    ...categories.map(cat => ({ value: cat.id, label: cat.name }))
  ];

  const stateOptions = [
    { value: '', label: 'Todos os estados' },
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <form onSubmit={handleSubmit(onSearch)} className="space-y-4">
        {/* Busca principal */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            {...register('query')}
            placeholder="O que você está procurando?"
            className="pl-10"
          />
        </div>

        {/* Filtros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select
            {...register('category')}
            label="Categoria"
            options={categoryOptions}
          />
          
          <div className="relative">
            <MapPin className="absolute left-3 top-8 text-gray-400 w-4 h-4" />
            <Select
              {...register('state')}
              label="Estado"
              options={stateOptions}
              className="pl-10"
            />
          </div>
          
          <Input
            {...register('minPrice', { valueAsNumber: true })}
            type="number"
            label="Preço mínimo"
            placeholder="R$ 0"
            min="0"
          />
          
          <Input
            {...register('maxPrice', { valueAsNumber: true })}
            type="number"
            label="Preço máximo"
            placeholder="R$ 999999"
            min="0"
          />
        </div>

        {/* Botão de busca */}
        <div className="flex justify-end">
          <Button type="submit" className="w-full md:w-auto">
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;