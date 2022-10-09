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

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Insert this script as-is in your index.html right after the <body> tag.
              // This will help to prevent a flash if dark mode is the default.
              (function() {
              var classNameDark = 'dark-mode';
              var classNameLight = 'light-mode';
              function setClassOnDocumentBody(darkMode) {
                document.body.classList.add(
                  darkMode ? classNameDark : classNameLight
                );
                document.body.classList.remove(
                  darkMode ? classNameLight : classNameDark
                );
              }
              var preferDarkQuery = '(prefers-color-scheme: dark)';
              var mql = window.matchMedia(preferDarkQuery);
              var supportsColorSchemeQuery = mql.media === preferDarkQuery;
              var localStorageTheme = null;
              try {
                localStorageTheme = localStorage.getItem('darkMode');
              } catch (err) {}
              var localStorageExists = localStorageTheme !== null;
              if (localStorageExists) {
                localStorageTheme = JSON.parse(localStorageTheme);
              }
              // Determine the source of truth
              if (localStorageExists) {
                // source of truth from localStorage
                setClassOnDocumentBody(localStorageTheme);
              } else if (supportsColorSchemeQuery) {
                // source of truth from system
                setClassOnDocumentBody(mql.matches);
                localStorage.setItem('darkMode', mql.matches);
              } else {
                // source of truth from document.body
                var isDarkMode = document.body.classList.contains(classNameDark);
                localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
              }
              })();
              `,
            }}
          />
      </Html>
    );
  }
}

export default MyDocument;