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
      {/* MONGODB_URI=mongodb+srv://khatripriya427:4dNvBr4bbiEs9cWk@cluster0.unbyigo.mongodb.net/?retryWrites=true&w=majority
 */}
    </div>
    </ThemeProvider>
  )
}
