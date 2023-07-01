import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Script from 'next/script';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://sdk.cashfree.com/js/ui/2.0.0/cashfree.prod.js"></Script>
    </>
  )
}
