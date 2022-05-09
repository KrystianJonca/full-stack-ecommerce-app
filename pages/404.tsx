import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components';

const NotFound: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404</title>
      </Head>

      <Layout>
        <div className="grid items-center h-[70vh] text-center">
          <h1 className="heading m-4">404. It seems like you are lost.</h1>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;
