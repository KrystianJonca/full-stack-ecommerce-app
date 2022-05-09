import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, Orders } from '../../components';
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
  const email = session.user.email;

  return (
    <div>
      <Head>
        <title>{session.user.email}</title>
      </Head>

      <Layout>
        <div className="max-w-7xl min-h-[50vh] mx-auto my-8">
          <h2 className="heading">
            Hello, {session.user.email?.substring(0, session.user.email.indexOf('@'))}
          </h2>
          <h3 className="text-xl sm:text-2xl mt-6">Your orders</h3>
          <Orders email={email as string} />
        </div>
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
