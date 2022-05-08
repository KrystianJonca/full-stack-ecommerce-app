import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../../components';
import { GetServerSideProps } from 'next';
import { getCsrfToken } from 'next-auth/react';
import Input from '../../components/UI/Input';

interface ISignInProps {
  crsfToken: string;
}

const SignIn: NextPage<ISignInProps> = ({ crsfToken }) => {
  return (
    <div>
      <Head>
        <title>Sign In</title>
      </Head>

      <Layout>
        <div className="grid items-center h-[70vh]">
          <div className="max-w-3xl mx-auto">
            <form method="post" action="/api/auth/signin/email">
              <input name="csrfToken" type="hidden" defaultValue={crsfToken} />
              <Input label="Email" name="email" type="email" dark={true} required />
              <button type="submit" className="block btn-dark my-6 mx-auto">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const crsfToken = await getCsrfToken(context);
  return {
    props: { crsfToken },
  };
};

export default SignIn;
