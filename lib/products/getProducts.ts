import type { Product } from '@prisma/client';
import { prisma } from '../prisma-client';

const getProducts = async () => {
  const data: Partial<Product>[] = await prisma.product.findMany({
    select: { id: true, image: true, title: true, description: true, price: true, inventory: true },
  });

  return data;
};

export default getProducts;
