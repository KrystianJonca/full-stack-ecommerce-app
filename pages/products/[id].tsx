import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { Layout, ProductInfo } from '../../components';
import { Product } from '@prisma/client';
import getProducts from '../../lib/products/getProducts';
import getProduct from '../../lib/products/getProduct';
import { ParsedUrlQuery } from 'querystring';

interface IProduct {
  product: Product;
}

const Product: NextPage<IProduct> = ({ product }) => {
  return (
    <div>
      <Head>
        <title>{product.title} | Formula Lifestyle</title>
      </Head>

      <Layout>
        <div className="max-w-6xl mx-auto p-8 m-4">
          <ProductInfo product={product} />
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
  const product = await getProduct(Number(id));

  return {
    props: { product },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();

  const paths = products.map((product) => ({ params: { id: String(product.id) } }));

  return { paths, fallback: 'blocking' };
};

export default Product;
