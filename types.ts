
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  isFeatured: boolean;
  popularity: number; // 1-5
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  email: string;
}
