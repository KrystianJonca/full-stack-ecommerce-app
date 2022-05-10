import React from 'react';
import type { CartProduct } from '../../context/types';
import CartItem from './CartItem';

interface ICartItemsProps {
  products: CartProduct[];
}

const CartItems: React.FC<ICartItemsProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default CartItems;
