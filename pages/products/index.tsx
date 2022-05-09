import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Layout, ProductsList } from '../../components';
import { Product } from '@prisma/client';
import getProducts from '../../lib/products/getProducts';

interface IProducts {
  products: Product[];
}

const Products: NextPage<IProducts> = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Products | Formula Lifestyle</title>
      </Head>

      <Layout>
        <div className="max-w-6xl mx-auto p-8 m-4">
          <h2 className="heading text-center mb-8">Products</h2>
          <ProductsList products={products} />
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();

  return {
    props: { products },
    revalidate: 60,
  };
};

export default Products;
