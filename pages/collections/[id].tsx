import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { Layout, ProductsList } from '../../components';
import { Collection, Product } from '@prisma/client';
import getCollections from '../../lib/collections/getCollections';
import getCollectionProducts from '../../lib/collections/getCollectionProducts';
import { ParsedUrlQuery } from 'querystring';

interface ICollectionP extends Collection {
  products: Product[];
}

interface ICollection {
  collection: ICollectionP;
}

const Collections: NextPage<ICollection> = ({ collection }) => {
  return (
    <div>
      <Head>
        <title>{collection.name} | Formula Lifestyle</title>
      </Head>

      <Layout>
        <div className="max-w-6xl mx-auto p-8 m-4">
          <h2 className="heading text-center mb-8">{collection.name}</h2>
          <ProductsList products={collection.products} />
        </div>
      </Layout>
    </div>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const collection = await getCollectionProducts(Number(id));

  return {
    props: { collection },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const collections = await getCollections();

  const paths = collections.map((collection) => ({ params: { id: String(collection.id) } }));

  return { paths, fallback: 'blocking' };
};

export default Collections;
