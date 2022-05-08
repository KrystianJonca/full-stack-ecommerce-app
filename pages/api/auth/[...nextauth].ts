import NextAuth from 'next-auth/next';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../utils/db';
import getEnv from '../../../utils/env';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: getEnv('EMAIL_SERVER'),
      from: getEnv('EMAIL_FROM'),
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/checkemail',
    error: '/auth/error',
  },
  secret: getEnv('SECRET'),
});
