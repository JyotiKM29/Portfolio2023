import '@/styles/globals.css';
import '@/styles/styles.scss';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <div>
       {/* <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
              Home
              </Link>
            </li>
            <li>
              <Link href="/about">
              About
              </Link>
            </li>
            <li>
              <Link href="/github">
              Projects
              </Link>
            </li>
            <li>
              <Link href="/experience">
              Experience
              </Link>
            </li>
            <li>
              <Link href="/contact">
              Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}
