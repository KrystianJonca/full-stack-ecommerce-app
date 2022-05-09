import React from 'react';
import CollectionCard from './CollectionCard';
import type { Collection } from '@prisma/client';

interface ICollectionsProps {
  collections: Partial<Collection>[];
}

const collections: React.FC<ICollectionsProps> = ({ collections }) => {
  return (
    <div className="w-full flex flex-row justify-evenly items-start flex-wrap">
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default collections;
