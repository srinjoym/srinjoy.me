import Document, { Head, Main, NextScript, Html } from 'next/document';
import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Srinjoy Majumdar is an engineer passionate about augmented reality, computer vision and education"/>
          <meta name="author" content="Srinjoy Majumdar"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="HandheldFriendly" content="True"/>
          <meta httpEquiv="cleartype" content="on"/>
          <meta name="robots" content="all"/>
          <link rel="icon"
            type="image/png"
            href="/img/favicon.png?v=1.2"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;