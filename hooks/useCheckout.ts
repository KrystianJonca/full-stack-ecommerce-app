import { useMutation } from 'react-query';
import { CartProduct } from '../context/types';
import { checkoutCart } from '../lib/api/checkoutCart';
import { redirectToCheckout } from '../utils/stripe-helpers';

const useCheckout = () => {
  return useMutation((products: CartProduct[]) => checkoutCart(products), {
    onSuccess: redirectToCheckout,
  });
};

export default useCheckout;
