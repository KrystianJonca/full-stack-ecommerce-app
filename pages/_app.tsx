import { useState } from 'react';
import '../styles/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
