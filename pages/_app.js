import '@/styles/globals.css';
import '@/styles/styles.scss';
import Navbar from './navbar';
import Hamburger from './Hamburger';
import { ThemeProvider, useTheme } from 'next-themes';
// import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
    <div>
      <Navbar />
      <Hamburger />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
    </ThemeProvider>
  )
}
