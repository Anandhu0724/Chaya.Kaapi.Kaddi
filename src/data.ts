import { MenuItem, LocationInfo } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'pazham-pori',
    name: 'Yethaka Poli / Pazham Pori',
    category: 'snacks',
    price: 15,
    description: 'Sweet, ripe local plantain fritters fried to a rich golden-yellow in a light, cardamom-scented crispy coating.',
    image: '/pazham_pori.webp',
    tag: 'Sweet Delight',
    isVegetarian: true,
    ingredients: ['Ripe Local Plantains', 'All-Purpose Flour', 'Cardamom Essence', 'Pinch of Turmeric'],
    pairing: 'Special Cardamom Tea',
    sweetness: 3
  },
  {
    id: 'baji',
    name: 'Live Baji Varieties',
    category: 'snacks',
    price: 15,
    description: 'Hot, spicy chili and potato fritters dipped in seasoned gram flour batter and fried live right at our griddle.',
    image: '/live_baji.png',
    tag: 'Spicy Bite',
    isVegetarian: true,
    ingredients: ['Long Hot Chilies', 'Thin Potato Slices', 'Spiced Chickpea Batter'],
    pairing: 'Special Cardamom Tea',
    spicyLevel: 3
  },
  {
    id: 'layered-puffs',
    name: 'Layered Egg & Veg Puffs',
    category: 'bakery',
    price: 20,
    description: 'Ultra-flaky, multi-layered golden pastry stuffed with a rich, caramelized egg masala blend or savory spiced garden vegetables.',
    image: '/layered_puffs.png',
    tag: 'Signature Bake',
    isVegetarian: false,
    ingredients: ['Flaky Pastry Layers', 'Caramelized Onion Gravy', 'Boiled Egg / Mixed Veggies'],
    pairing: 'Special Cardamom Tea',
    spicyLevel: 1
  }
];

export const LOCATION_INFO: LocationInfo = {
  name: 'Golden Bakery',
  landmark: 'Near SN Public school, Mlamala',
  address: 'Thengakal P.O, Vandiperiyar, Peermade Sub District, Idukki',
  pincode: '685533',
  hours: '1:00 PM - 8:30 PM Daily (Fresh hot batches arrive at 3:00 PM)',
  phone: '+91 94474 12345'
};
