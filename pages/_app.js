import Head from "next/head";
import '@/styles/globals.css'
import Footer1 from './components/footer'
import Navbar from './components/navbar'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bxp_Website</title>
        <meta name="description" content="Your Accounting Partner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer1 />
    </>
  );
}
