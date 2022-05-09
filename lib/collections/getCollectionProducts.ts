import type { Collection } from '@prisma/client';
import { prisma } from '../prisma-client';

const getCollectionProducts = async (id: number) => {
  const data: Partial<Collection> | null = await prisma.collection.findUnique({
    where: { id },
    select: {
      name: true,
      products: { select: { id: true, title: true, image: true, price: true } },
    },
  });

  return data;
};

export default getCollectionProducts;
