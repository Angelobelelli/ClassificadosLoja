export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  seller: {
    name: string;
    phone: string;
    whatsapp?: string;
  };
  location: {
    city: string;
    state: string;
  };
  isPremium: boolean;
  createdAt: string;
  views: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface CreateProductForm {
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  sellerName: string;
  sellerPhone: string;
  sellerWhatsapp?: string;
  city: string;
  state: string;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  city?: string;
  state?: string;
}