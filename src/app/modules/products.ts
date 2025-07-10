export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string | number; // Changed to string | number to allow both types
  stock: number;
}


