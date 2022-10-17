import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main style={{ padding: '100px' }}>
      <div style={{ padding: '100px' }}>
        <span
          style={{ background: 'lightgrey', margin: '50px', padding: '10px' }}
        >
          <Link href="/">Home</Link>
        </span>

        {/* This route uses getServerSideProps. */}
        <span
          style={{ background: 'lightgrey', margin: '50px', padding: '10px' }}
        >
          <Link href="/user-gssp/123">
            Dynamic subroute (getServerSideProps)
          </Link>
        </span>
      </div>

      <Component {...pageProps} />
    </main>
  )
}
