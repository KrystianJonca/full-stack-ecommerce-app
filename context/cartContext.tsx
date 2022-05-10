import React, { createContext, useReducer, useMemo } from 'react';
import type { State, Dispatch, CartProviderProps } from './types';
import { cartReducer } from './cartReducer';

const initialState: State = { products: [], totalPrice: 0, isOpen: false };

export const CartContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
