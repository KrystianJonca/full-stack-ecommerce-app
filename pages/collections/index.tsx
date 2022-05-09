import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Layout, CollectionsList } from '../../components';
import { Collection } from '@prisma/client';
import getCollections from '../../lib/collections/getCollections';

interface ICollection {
  collections: Collection[];
}

const Collections: NextPage<ICollection> = ({ collections }) => {
  return (
    <div>
      <Head>
        <title>Collections | Formula Lifestyle</title>
      </Head>

      <Layout>
        <div className="max-w-6xl mx-auto p-8 m-4">
          <h2 className="heading text-center mb-8">Collections</h2>
          <CollectionsList collections={collections} />
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const collections = await getCollections();

  return {
    props: { collections },
    revalidate: 60,
  };
};

export default Collections;
