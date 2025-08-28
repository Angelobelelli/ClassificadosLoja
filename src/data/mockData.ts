import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'eletronicos', name: 'Eletrônicos', icon: 'Smartphone', count: 45 },
  { id: 'veiculos', name: 'Veículos', icon: 'Car', count: 32 },
  { id: 'casa-jardim', name: 'Casa e Jardim', icon: 'Home', count: 28 },
  { id: 'moda', name: 'Moda e Beleza', icon: 'Shirt', count: 67 },
  { id: 'esportes', name: 'Esportes', icon: 'Dumbbell', count: 23 },
  { id: 'servicos', name: 'Serviços', icon: 'Wrench', count: 41 },
  { id: 'imoveis', name: 'Imóveis', icon: 'Building', count: 19 },
  { id: 'outros', name: 'Outros', icon: 'Package', count: 15 },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 14 Pro Max 256GB',
    description: 'iPhone 14 Pro Max em perfeito estado, pouco uso, com caixa e todos os acessórios originais.',
    price: 4500,
    category: 'eletronicos',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg'
    ],
    seller: {
      name: 'João Silva',
      phone: '(11) 99999-9999',
      whatsapp: '5511999999999'
    },
    location: {
      city: 'São Paulo',
      state: 'SP'
    },
    isPremium: true,
    createdAt: '2025-01-15T10:00:00Z',
    views: 127
  },
  {
    id: '2',
    title: 'Honda Civic 2020 Automático',
    description: 'Honda Civic EXL 2020, automático, completo, revisões em dia, único dono.',
    price: 85000,
    category: 'veiculos',
    images: [
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
    ],
    seller: {
      name: 'Maria Santos',
      phone: '(21) 88888-8888',
      whatsapp: '5521888888888'
    },
    location: {
      city: 'Rio de Janeiro',
      state: 'RJ'
    },
    isPremium: false,
    createdAt: '2025-01-14T15:30:00Z',
    views: 89
  },
  {
    id: '3',
    title: 'Sofá 3 Lugares Couro Legítimo',
    description: 'Sofá de couro legítimo, cor marrom, muito confortável, sem avarias.',
    price: 1200,
    category: 'casa-jardim',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg'
    ],
    seller: {
      name: 'Carlos Oliveira',
      phone: '(31) 77777-7777'
    },
    location: {
      city: 'Belo Horizonte',
      state: 'MG'
    },
    isPremium: true,
    createdAt: '2025-01-13T09:15:00Z',
    views: 56
  },
  {
    id: '4',
    title: 'Notebook Gamer RTX 3060',
    description: 'Notebook gamer com placa RTX 3060, 16GB RAM, SSD 512GB, ideal para jogos e trabalho.',
    price: 3200,
    category: 'eletronicos',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg'
    ],
    seller: {
      name: 'Ana Costa',
      phone: '(85) 66666-6666',
      whatsapp: '5585666666666'
    },
    location: {
      city: 'Fortaleza',
      state: 'CE'
    },
    isPremium: false,
    createdAt: '2025-01-12T14:20:00Z',
    views: 203
  },
  {
    id: '5',
    title: 'Bicicleta Mountain Bike Aro 29',
    description: 'Mountain bike aro 29, 21 marchas, freios a disco, suspensão dianteira.',
    price: 800,
    category: 'esportes',
    images: [
      'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg'
    ],
    seller: {
      name: 'Pedro Almeida',
      phone: '(47) 55555-5555'
    },
    location: {
      city: 'Blumenau',
      state: 'SC'
    },
    isPremium: false,
    createdAt: '2025-01-11T11:45:00Z',
    views: 34
  }
];