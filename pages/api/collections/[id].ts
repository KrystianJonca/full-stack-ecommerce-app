import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma-client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const idNumber = Number(id);

  const collection = await prisma.collection.findFirst({
    where: { id: idNumber },
    include: { products: true },
  });

  if (collection) res.status(200).json(collection);
  else res.status(400).json({ error: `Collection with ID: ${id} not found.` });
};

export default handler;
