import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma-client';
import { withSentry } from '@sentry/nextjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const collections = await prisma.collection.findMany();

  res.status(200).json(collections);
};

export default withSentry(handler);
