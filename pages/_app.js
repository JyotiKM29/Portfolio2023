// _app.js
import '@/styles/globals.css';
import '@/styles/styles.scss';
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* Your global CSS is now imported here */}
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
