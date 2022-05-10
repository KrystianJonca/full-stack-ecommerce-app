import { ReactNode } from 'react';
import type { Product } from '@prisma/client';

export type CartProduct = {
  id: Product['id'];
  image: Product['image'];
  title: Product['title'];
  price: Product['price'];
};
export type Action =
  | { type: 'addProduct'; payload: CartProduct }
  | { type: 'deleteProduct'; payload: CartProduct['id'] }
  | { type: 'openCart' }
  | { type: 'closeCart' };

export type State = {
  readonly products: CartProduct[];
  readonly totalPrice: number;
  readonly isOpen: boolean;
};

export type Dispatch = (action: Action) => void;

export type CartProviderProps = { readonly children: ReactNode };
