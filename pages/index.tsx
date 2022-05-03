import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Full Stack E-commerce App</title>
        <meta name="description" content="Full Stack E-commerce App created in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-bold">Hello app!</h1>
      </main>
    </div>
  );
};

export default Home;
