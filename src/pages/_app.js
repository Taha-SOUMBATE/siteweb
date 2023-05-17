import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {

  return (<>
 <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0/css/bootstrap.min.css"></link>
      </Head>

      
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0/js/bootstrap.min.js"></script>


  <Component {...pageProps} />
  </>)
}
