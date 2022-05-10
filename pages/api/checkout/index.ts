import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';
import getEnv from '../../../utils/env';

const stripe = new Stripe(getEnv('STRIPE_SECRET_KEY'), { apiVersion: '2020-08-27' });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { id } = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        submit_type: 'donate',
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        line_items: req.body,
      });
      console.log(id);
      res.status(200).json({ id });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  }
};

export default handler;
