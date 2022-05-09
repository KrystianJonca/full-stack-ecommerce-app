import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '@prisma/client';

interface IProductsProps {
  products: Partial<Product>[];
}

const Products: React.FC<IProductsProps> = ({ products }) => {
  return (
    <div className="w-full flex flex-row justify-evenly items-start flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
