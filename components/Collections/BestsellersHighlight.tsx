import React from 'react';
import { ProductsList } from '..';
import type { Product } from '@prisma/client';

interface IBestsellerHighlightProps {
  products: Partial<Product>[];
}

const BestsellersHighlight: React.FC<IBestsellerHighlightProps> = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto p-8 m-4">
      <h2 className="heading text-center mb-8">Bestsellers</h2>
      <ProductsList products={products} />
    </div>
  );
};

export default BestsellersHighlight;
