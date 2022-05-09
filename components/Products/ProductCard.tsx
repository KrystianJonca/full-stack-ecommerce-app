import React from 'react';
import Image from 'next/image';
import type { Product } from '@prisma/client';
import Link from 'next/link';

interface IProductCardProps {
  product: Partial<Product>;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="m-2 cursor-pointer">
        <div>
          <Image src={product.image as string} alt={product.title} width="250" height="250" />
        </div>
        <div className="flex items-center justify-between">
          <h4 className="font-bold">{product.title}</h4>
          <span>{product.price}$</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
