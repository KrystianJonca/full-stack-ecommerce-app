import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error('useCart hook must be used withing cart context provider');

  return context;
};

export default useCart;
