import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';

export const middleware = async (req: NextRequest) => {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  };

  const session = await getSession({ req: requestForNextAuth });

  if (!session) {
    const signInPage = '/auth/signin';
    const signInUrl = new URL(signInPage, req.nextUrl.origin);
    signInUrl.searchParams.append('callbackUrl', req.url);

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
};
