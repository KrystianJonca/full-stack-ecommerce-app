import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../../components';

const CheckEmail: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Verify your sign in request</title>
      </Head>

      <Layout>
        <div className="grid items-center h-[70vh]">
          <div className="max-w-2xl mx-auto text-center text-2xl">
            <h3>Please check your email for passwordless sing-in.</h3>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CheckEmail;
