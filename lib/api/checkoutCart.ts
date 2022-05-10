import { transformProduct } from '../../utils/stripe-helpers';
import { CartProduct } from '../../context/types';

export const checkoutCart = async (products: CartProduct[]) => {
  const stripeItems = products.map((product) => transformProduct(product));

  try {
    const res = await fetch(`/api/checkout/`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(stripeItems),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
};
