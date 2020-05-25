import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="Srinjoy Majumdar is a Software Engineer at Microsoft building HoloLens."/>
          <meta name="author" content="Srinjoy Majumdar"/>
          <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"/>
          <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)"/>
          <meta name="apple-mobile-web-app-title" content="srinjoy.me"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="HandheldFriendly" content="True"/>
          <meta http-equiv="cleartype" content="on"/>
          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
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
      </html>
    );
  }
}

export default MyDocument;