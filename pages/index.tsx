import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Full Stack E-commerce App</title>
        <meta name="description" content="Full Stack E-commerce App created in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="font-bold">Hello app!</h1>
      </Layout>
    </div>
  );
};

export default Home;
