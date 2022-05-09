import React from 'react';
import Image from 'next/image';
import type { Collection } from '@prisma/client';
import Link from 'next/link';

interface ICollectionCardProps {
  collection: Partial<Collection>;
}

const collectionCard: React.FC<ICollectionCardProps> = ({ collection }) => {
  return (
    <Link href={`/collections/${collection.id}`}>
      <div className="m-2 cursor-pointer">
        <Image src={collection.image as string} alt={collection.name} width="500" height="500" />
        <h4 className="text-2xl">{collection.name}</h4>
      </div>
    </Link>
  );
};

export default collectionCard;
