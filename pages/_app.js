import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css';
function MyApp({ Component, pageProps }) {

  return (
    <div data-theme='synthwave'><Component {...pageProps} />
      <Analytics />
    </div>
  )
}

export default MyApp
