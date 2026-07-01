import { MenuItem, LocationInfo } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // THE CHAYA & KAAPI STALL (Drinks)
  {
    id: 'special-tea',
    name: 'Special Cardamom Tea',
    category: 'drinks',
    price: 12,
    description: 'Fragrant, frothy tea slow-infused with crushed local cardamoms.',
    image: '/kerala-tea-stall-chai-pouring.webp',
    tag: 'Fresh Brewed',
    isVegetarian: true,
    ingredients: ['Green Cardamom', 'Assam Tea Dust', 'Full Cream Milk'],
    pairing: 'Layered Egg & Veg Puffs',
    sweetness: 2
  },
  {
    id: 'ginger-tea',
    name: 'Strong Ginger Tea',
    category: 'drinks',
    price: 12,
    description: 'Authentic Kerala Inji Chaya with a sharp, comforting kick of fresh ginger.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tag: 'Fresh Brewed',
    isVegetarian: true,
    ingredients: ['Fresh Mountain Ginger', 'Assam Tea Dust', 'Full Cream Milk'],
    pairing: 'Uzhunnu Vada',
    sweetness: 2
  },
  {
    id: 'lemon-tea',
    name: 'Fresh Lemon Tea',
    category: 'drinks',
    price: 12,
    description: 'Light, clear, and refreshing tea balanced with a squeeze of fresh lime juice.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    tag: 'Citrus Refresh',
    isVegetarian: true,
    ingredients: ['Lime Juice', 'Black Tea Dust', 'Sugar'],
    pairing: 'Live Ulli Vada',
    sweetness: 2
  },
  {
    id: 'sulaimani-coffee',
    name: 'Sulaimani / Black Coffee',
    category: 'drinks',
    price: 10,
    description: 'Bold, traditional black brew to perfectly cut through hot evening snacks.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    tag: 'Classic Brew',
    isVegetarian: true,
    ingredients: ['Chicory Blend Coffee', 'Hot Water', 'Optional Cardamom'],
    pairing: 'Paruppu Vada',
    sweetness: 1
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    category: 'drinks',
    price: 15,
    description: 'Rich, aromatic milk tea blended with cinnamon, cloves, ginger, and cardamom.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tag: 'Spiced Delight',
    isVegetarian: true,
    ingredients: ['Cinnamon', 'Cloves', 'Cardamom', 'Ginger', 'Tea Leaves'],
    pairing: 'Nostalgic Bonda',
    sweetness: 2
  },
  {
    id: 'boost-horlicks',
    name: 'Hot Boost / Horlicks Mix Milk',
    category: 'drinks',
    price: 20,
    description: 'Warm, nostalgic malted milk blends whisked to a rich froth.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    tag: 'Nostalgic Warmth',
    isVegetarian: true,
    ingredients: ['Boost Malt Powder', 'Horlicks Powder', 'Frothy Hot Milk'],
    pairing: 'Bakehouse Meat/Veg Cutlet',
    sweetness: 3
  },
  {
    id: 'filter-coffee',
    name: 'Filter Coffee',
    category: 'drinks',
    price: 15,
    description: 'Aromatic, deep double-filtered South Indian decoction with hot frothy milk.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    tag: 'Local Favorite',
    isVegetarian: true,
    ingredients: ['Premium Chicory Decoction', 'Frothy Hot Milk'],
    pairing: 'Uzhunnu Vada',
    sweetness: 1
  },

  // FRESHLY FRIED KADIYAN GRIDDLE (Snacks & Bakery)
  {
    id: 'uzhunnu-vada',
    name: 'Uzhunnu Vada',
    category: 'snacks',
    price: 15,
    description: 'Crispy, savory black-lentil donuts spiced with crushed pepper and ginger.',
    image: '/crispy-uzhunnu-vada-texture.webp',
    tag: 'Crispy & Hot',
    isVegetarian: true,
    ingredients: ['Black Gram', 'Crushed Pepper', 'Minced Ginger', 'Curry Leaves'],
    pairing: 'Filter Coffee',
    spicyLevel: 1
  },
  {
    id: 'paruppu-vada',
    name: 'Paruppu Vada',
    category: 'snacks',
    price: 15,
    description: 'Crunchy, coarse-ground chana dal patties infused with shallots and curry leaves.',
    image: 'https://images.unsplash.com/photo-1547058886-af77813becc5?auto=format&fit=crop&w=800&q=80',
    tag: 'Crispy & Hot',
    isVegetarian: true,
    ingredients: ['Chana Dal', 'Shallots', 'Green Chilies', 'Curry Leaves'],
    pairing: 'Sulaimani / Black Coffee',
    spicyLevel: 2
  },
  {
    id: 'ulli-vada',
    name: 'Live Ulli Vada',
    category: 'snacks',
    price: 15,
    description: 'Ultra-crispy, golden ribbon-fried onion fritters with fresh green chilies.',
    image: '/hot-ulli-vada-kerala-snacks.webp',
    tag: 'Crispy & Hot',
    isVegetarian: true,
    ingredients: ['Sautéed Red Onions', 'Gram Flour', 'Ginger', 'Green Chilies'],
    pairing: 'Fresh Lemon Tea',
    spicyLevel: 2
  },
  {
    id: 'nostalgic-bonda',
    name: 'Nostalgic Bonda',
    category: 'snacks',
    price: 15,
    description: 'Savory, deep-fried golden potato mash balls coated in seasoned chickpea batter.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tag: 'Griddle Hot',
    isVegetarian: true,
    ingredients: ['Mashed Potatoes', 'Spiced Gram Flour Batter', 'Fennel Seeds'],
    pairing: 'Masala Chai',
    spicyLevel: 2
  },
  {
    id: 'cutlet',
    name: 'Bakehouse Meat/Veg Cutlet',
    category: 'snacks',
    price: 15,
    description: 'Perfectly spiced potato-crumbed patties fried to a crisp exterior.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    tag: 'Crispy Exterior',
    isVegetarian: true,
    ingredients: ['Minced Veggies', 'Mashed Potato', 'Breadcrumbs', 'Malabar Spices'],
    pairing: 'Hot Boost / Horlicks Mix Milk',
    spicyLevel: 2
  },
  {
    id: 'pazham-pori',
    name: 'Yethaka Poli / Pazham Pori',
    category: 'snacks',
    price: 15,
    description: 'Ripe, sweet local plantain slices dipped in golden turmeric batter.',
    image: '/golden-yellow-pazham-pori.webp',
    tag: 'Sweet Delight',
    isVegetarian: true,
    ingredients: ['Ripe Local Plantain', 'All-Purpose Flour', 'Cardamom Essence', 'Pinch of Turmeric'],
    pairing: 'Special Cardamom Tea',
    sweetness: 3
  },
  {
    id: 'baji',
    name: 'Live Baji Varieties',
    category: 'snacks',
    price: 15,
    description: 'Long mild green chilies and thin potato discs fried fresh to order.',
    image: '/live_baji.png',
    tag: 'Crispy & Hot',
    isVegetarian: true,
    ingredients: ['Long Green Chilies', 'Thin Potato Slices', 'Spiced Chickpea Batter'],
    pairing: 'Special Cardamom Tea',
    spicyLevel: 3
  },
  {
    id: 'layered-puffs',
    name: 'Layered Egg & Veg Puffs',
    category: 'bakery',
    price: 20,
    description: 'Flaky, multi-layered golden puff sheets packed with onion masala.',
    image: '/layered_puffs.png',
    tag: 'Signature Bake',
    isVegetarian: false,
    ingredients: ['Flaky Pastry Layers', 'Caramelized Onion Masala', 'Boiled Egg / Mixed Veggies'],
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
