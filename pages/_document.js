import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            {/* font inter */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />    
            <link  href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"/>

            {/* font-rubik */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />  
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}