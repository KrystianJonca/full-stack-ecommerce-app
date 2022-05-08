import { collections, products } from '../utils/data';
import { prisma } from '../lib/prisma-client';

const main = async () => {
  try {
    await Promise.all(
      collections.map(({ id, name, image }) =>
        prisma.collection.upsert({
          where: { id: id },
          update: {},
          create: { id, name, image },
        }),
      ),
    );
    await Promise.all(
      products.map(({ id, title, price, description, image, inventory, collections }) =>
        prisma.product.upsert({
          where: { id },
          update: {},
          create: {
            id,
            title,
            price,
            image,
            description,
            inventory,
            collections: {
              connect: collections.map((id: number) => ({ id })),
            },
          },
        }),
      ),
    );
  } catch (error) {
    console.error(error);
  }
};

main();
