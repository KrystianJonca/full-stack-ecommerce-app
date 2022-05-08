import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma-client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const idNumber = Number(id);

  const product = await prisma.product.findFirst({ where: { id: idNumber } });

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(400).json({ error: `Product with ID: ${id} not found.` });
  }
};

export default handler;
