import { prisma } from '../prisma-client';

const getProduct = async (id: number) => {
  const product = await prisma.product.findFirst({
    where: { id },
    select: { id: true, image: true, title: true, description: true, price: true, inventory: true },
  });

  return product;
};

export default getProduct;
