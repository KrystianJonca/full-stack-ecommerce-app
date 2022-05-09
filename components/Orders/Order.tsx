import React from 'react';
import type { Order as OrderType, Product } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';

interface IOrder extends OrderType {
  products: Partial<Product>[];
}

interface IOrderProps {
  order: Partial<IOrder>;
}

const Order: React.FC<IOrderProps> = ({ order }) => {
  return (
    <li className="w-full h-16 shadow-xl p-2 flex items-center justify-between text-xl border-2 border-primary-dark">
      <span className="font-bold">#{order.id}</span>
      <span>{order.shippingAdress}</span>
      <span className="flex flex-column">
        {order.products?.map((product) => (
          <span className="flex justify-center items-center p-2 cursor-pointer" key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Image src={product.image as string} alt="Ordered product" width="40" height="40" />
            </Link>
          </span>
        ))}
      </span>
    </li>
  );
};

export default Order;
