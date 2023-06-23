import '@/styles/globals.css';
import '@/styles/styles.scss';
import Navbar from './navbar';
import Hamburger from './Hamburger';
import Head from 'next/head';

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
