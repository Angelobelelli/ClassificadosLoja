import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Category } from '../../types';
import Card from '../ui/Card';

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
    return IconComponent ? <IconComponent className="w-8 h-8" /> : <Icons.Package className="w-8 h-8" />;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map(category => (
        <Link key={category.id} to={`/categoria/${category.id}`}>
          <Card hover className="p-6 text-center">
            <div className="text-blue-600 mb-3 flex justify-center">
              {getIcon(category.icon)}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.count} anúncios</p>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;