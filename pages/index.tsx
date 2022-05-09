import type { NextPage, GetStaticProps } from 'next';
import type { Product, Collection } from '@prisma/client';
import Head from 'next/head';
import { Layout, Header, BestsellerHighlight } from '../components';
import getCollectionProducts from '../lib/collections/getCollectionProducts';

interface ICollectionP extends Collection {
  products: Product[];
}

interface IHome {
  bestsellers: ICollectionP;
}
const Home: NextPage<IHome> = ({ bestsellers }) => {
  return (
    <div>
      <Head>
        <title>Full Stack E-commerce App</title>
        <meta name="description" content="Full Stack E-commerce App created in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header />
        <BestsellerHighlight products={bestsellers.products} />
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const bestsellers = await getCollectionProducts(1); // bestsellers is always 1

  return {
    props: { bestsellers },
    revalidate: 60,
  };
};

export default Home;
