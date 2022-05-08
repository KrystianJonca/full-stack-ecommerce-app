import type { Product, Collection } from '@prisma/client';

interface IProduct {
  id: Product['id'];
  title: Product['title'];
  image: Product['image'];
  description: Product['description'];
  price: Product['price'];
  inventory: Product['inventory'];
  collections: number[];
}

export const collections: Collection[] = [
  {
    id: 1,
    name: 'Bestsellers',
    image: '/collections/bestsellers.jpeg',
  },
  {
    id: 2,
    name: 'Clothing',
    image: '/collections/clothing.jpeg',
  },
  {
    id: 3,
    name: 'Hats',
    image: '/collections/hats.jpeg',
  },
  {
    id: 4,
    name: 'Accessories',
    image: '/collections/keychains.jpg',
  },
];

export const products: IProduct[] = [
  {
    id: 1,
    title: 'Box Hoodie',
    image: '/products/box.jpeg',
    description: 'BOX BOX BOX Soft Unisex Hoodie',
    price: 29.99,
    inventory: 100,
    collections: [1, 2],
  },
  {
    id: 2,
    title: 'Bwoah T-shirt',
    image: '/products/bwoah.png',
    description: 'Bwoah Soft Unisex T-shirt',
    price: 19.99,
    inventory: 100,
    collections: [2],
  },
  {
    id: 3,
    title: 'Do Not Disturb Hoodie',
    image: '/products/donotdisturb.jpeg',
    description: 'Do Not Disturb Soft Unisex Hoodie',
    price: 34.99,
    inventory: 100,
    collections: [1, 2],
  },
  {
    id: 4,
    title: 'Drivers Name T-Shirt',
    image: '/products/driversnames.png',
    description: 'Drivers Name T-Shirt Soft Unisex T-Shirt',
    price: 19.99,
    inventory: 100,
    collections: [1, 2],
  },
  {
    id: 5,
    title: 'Hammer Time T-Shirt',
    image: '/products/hammertime.png',
    description: 'Hammer Time Soft Unisex T-Shirt',
    price: 19.99,
    inventory: 100,
    collections: [2],
  },
  {
    id: 6,
    title: 'Just Send It T-Shirt',
    image: '/products/justsendit.jpeg',
    description: 'Just Send It Soft Unisex Hoodie',
    price: 19.99,
    inventory: 100,
    collections: [1, 2],
  },
  {
    id: 7,
    title: 'Super Max Hoodie',
    image: '/products/supermax.jpeg',
    description: 'Super Max Soft Unisex Hoodie',
    price: 29.99,
    inventory: 100,
    collections: [2],
  },
  {
    id: 8,
    title: 'Still I Rise Hat',
    image: '/products/stillirisehat.jpg',
    description: 'Still I Rise Unisex Dad Hat',
    price: 24.99,
    inventory: 100,
    collections: [3],
  },
  {
    id: 9,
    title: 'Drivers Name Hat',
    image: '/products/drivernames.png',
    description: 'Drivers Name Unisex Dad Hat',
    price: 24.99,
    inventory: 100,
    collections: [1, 3],
  },
  {
    id: 10,
    title: '#WeRaceAsOne Mug',
    image: '/products/mug.jpeg',
    description: '#WeRaceAsOne Initiative Mug',
    price: 14.99,
    inventory: 100,
    collections: [4],
  },
  {
    id: 11,
    title: 'F1 Tire Keychain',
    image: '/products/keychain.jpg',
    description: 'F1 Tire Inspired Keychain',
    price: 9.99,
    inventory: 100,
    collections: [1, 4],
  },
  {
    id: 12,
    title: 'McLaren Poster',
    image: '/products/poster.jpeg',
    description: 'McLaren Special Livery Poster',
    price: 39.99,
    inventory: 100,
    collections: [1, 4],
  },
];
