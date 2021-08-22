import React from 'react';
import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '../styles/app.css'

// TODO -> create JSON output export for hackmd doc

//* https://hackmd.io/@cli/SyMyfILq8#hackmd-cli-export-NOTEID-OUTPUT


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://latex.now.sh/style.css"/>
        <title>Planck</title>
        <meta name="title" content="Planck"/>
        <meta name="description"
          content="Planck is an incentive system for open innovation using non-fungible digital manuscripts on Ethereum."/>
    
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://p1anck.com/"/>
        <meta property="og:title" content="Planck"/>
        <meta property="og:description"
          content="Planck is an incentive system for open innovation using non-fungible digital manuscripts on Ethereum."/>
        {/* <meta property="og:image"
          content="%PUBLIC_URL%/Planck-img-no-whitespace.png"/> */}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="http://p1anck.com/"/>
        <meta property="twitter:title" content="Planck"/>
        <meta property="twitter:description"
        content="Planck is an incentive system for open innovation using non-fungible digital manuscripts on Ethereum."/>
        {/* <meta property="twitter:image"
        content="%PUBLIC_URL%/Planck-img-no-whitespace.png"/> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
