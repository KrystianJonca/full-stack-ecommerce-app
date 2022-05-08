import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../../components';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { User } from '@prisma/client';

interface Session {
  user: User;
}

interface ICustomerProps {
  session: Session;
}

const Customer: NextPage<ICustomerProps> = ({ session }) => {
  console.log(session.user);
  return (
    <div>
      <Head>
        <title>{session.user.email}</title>
      </Head>

      <Layout>
        <div></div>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
      props: {},
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default Customer;
