import React from 'react'
import Router from 'next/router';

// import '../styles/spacing.scss'
import '../styles/index.scss'


import Navigation from '../components/Navigation'

export default ({Component, pageProps}) => (
  <div>
    <Navigation />
    <Component {...pageProps} />
  </div>
)

Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]');
    const timestamp = new Date().valueOf();
    els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp;
  }
})