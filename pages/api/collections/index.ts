import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma-client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const collections = await prisma.collection.findMany();

  res.status(200).json(collections);
};

export default handler;
