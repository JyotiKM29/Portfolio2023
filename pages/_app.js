import '@/styles/globals.css';
import '@/styles/styles.scss';
import Navbar from '../components/navbar';
import Hamburger from '../components/Hamburger';

// import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Hamburger />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}