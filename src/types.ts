export interface MenuItem {
  id: string;
  name: string;
  category: 'drinks' | 'snacks' | 'bakery';
  price: number;
  description: string;
  image: string;
  tag?: string;
  isVegetarian?: boolean;
  ingredients?: string[];
  pairing?: string;
  spicyLevel?: number; // 0 to 3
  sweetness?: number; // 0 to 3
}

export type MenuCategory = 'all' | 'drinks' | 'snacks' | 'bakery';

export interface LocationInfo {
  name: string;
  landmark: string;
  address: string;
  pincode: string;
  hours: string;
  phone: string;
}
