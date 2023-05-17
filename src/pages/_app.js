import '@/styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';



import Head from 'next/head';



export default function App({ Component, pageProps }) {

  return (<>
<Head>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
</Head>

      
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0/js/bootstrap.min.js"></script>


  <Component {...pageProps} />
  </>)
}
