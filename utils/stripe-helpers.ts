import Stripe from 'stripe';
import { CartProduct } from '../context/types';
import { getStripe } from './get-stripe';

export function formatAmountForStripe(amount: number, currency: string): number {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

export const transformProduct = ({
  title,
  price,
  image,
}: CartProduct): Stripe.Checkout.SessionCreateParams.LineItem => ({
  name: title,
  amount: formatAmountForStripe(price, 'USD'),
  currency: 'USD',
  quantity: 1,
});

export const redirectToCheckout = async (session: Pick<Stripe.Checkout.Session, 'id'>) => {
  const stripe = await getStripe();

  return stripe!.redirectToCheckout({
    sessionId: session.id,
  });
};
