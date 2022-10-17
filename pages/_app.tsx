import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useState } from 'react'
import '../styles/globals.css'

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState | undefined }>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main style={{ padding: '100px' }}>
          <div style={{ padding: '100px' }}>
            <span
              style={{
                background: 'lightgrey',
                margin: '50px',
                padding: '10px',
              }}
            >
              <Link href="/">Home</Link>
            </span>

            {/* This route uses getServerSideProps. */}
            <span
              style={{
                background: 'lightgrey',
                margin: '50px',
                padding: '10px',
              }}
            >
              <Link href="/user-gssp/1">
                Dynamic subroute (getServerSideProps)
              </Link>
            </span>
          </div>

          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  )
}
