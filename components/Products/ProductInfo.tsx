import React from 'react';
import Image from 'next/image';
import type { Product } from '@prisma/client';

interface IProductInfoProps {
  product: Partial<Product>;
}

const ProductInfo: React.FC<IProductInfoProps> = ({ product }) => {
  return (
    <div className="w-full flex justify-evenly items-start flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <Image src={product.image as string} alt={product.title} width="500" height="500" />
      </div>
      <div className="flex items-start flex-col justify-center w-full md:w-1/2 p-4 text-left">
        <h2 className="heading">{product.title}</h2>
        <p className="italic text-lg p-2">{product.price}$</p>
        <p className="p-2">Items left: {product.inventory}</p>
        <button className="btn-dark w-full m-2" onClick={() => console.log('TODO')}>
          Add to cart{' '}
        </button>
        <p className="text-lg p-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
