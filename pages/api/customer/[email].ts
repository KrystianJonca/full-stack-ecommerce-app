import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prisma-client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;
  const session = await getSession({ req });

  if (email !== session?.user?.email)
    res.status(401).json({ error: 'You do not have access to this user.' });

  const user = await prisma.user.findFirst({
    where: { email: email as string },
    include: { orders: true },
  });

  if (user) res.status(200).json(user);
  else res.status(400).json({ error: `User with Email: ${email} not found.` });
};

export default handler;
