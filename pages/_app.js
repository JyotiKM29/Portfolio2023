import '@/styles/globals.css';
import '@/styles/styles.scss';
import Navbar from './navbar';

// import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}
