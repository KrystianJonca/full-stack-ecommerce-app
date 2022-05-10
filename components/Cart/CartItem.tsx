import React from 'react';
import type { CartProduct } from '../../context/types';
import Image from 'next/image';
import Link from 'next/link';
import useCart from '../../hooks/useCart';

interface ICartItemProps {
  product: CartProduct;
}

const CartItem: React.FC<ICartItemProps> = ({ product }) => {
  const { id, title, price, image } = product;
  const { dispatch } = useCart();

  const handleDelete = () => {
    dispatch({ type: 'deleteProduct', payload: id });
  };

  return (
    <li className="py-6 flex">
      <Link href={`/products/${id}`}>
        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden cursor-pointer">
          <Image src={image} alt={title} width="96" height="96" />
        </div>
      </Link>
      <div className="ml-4 flex-1 flex flex-col">
        <Link href={`/products/${id}`}>
          <h3 className="font-semibold cursor-pointer">{title}</h3>
        </Link>
        <p>{price}$</p>
        <div className="flex-1 flex items-end justify-between text-sm">
          <div className="flex">
            <button
              type="button"
              onClick={() => handleDelete()}
              className="font-medium hover:border-b-2 border-primary-dark cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
