import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../../components';
import { useRouter } from 'next/router';

const CheckEmail: NextPage = () => {
  const { error } = useRouter().query;

  return (
    <div>
      <Head>
        <title>Sign In Error</title>
      </Head>

      <Layout>
        <div className="grid items-center h-[70vh]">
          <div className="max-w-2xl mx-auto text-center text-2xl">
            <h3>Sorry but we had some trouble with signing you in.</h3>
            <p>Error message: {error}</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CheckEmail;
