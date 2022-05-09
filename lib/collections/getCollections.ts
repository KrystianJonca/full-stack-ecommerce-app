import type { Collection } from '@prisma/client';
import { prisma } from '../prisma-client';

const getCollections = async () => {
  const data: Collection[] = await prisma.collection.findMany();

  return data;
};

export default getCollections;
