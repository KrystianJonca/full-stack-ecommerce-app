import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma-client';
import { withSentry } from '@sentry/nextjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const products = await prisma.product.findMany();

  res.status(200).json(products);
};

export default withSentry(handler);
