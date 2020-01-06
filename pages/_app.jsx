import React from 'react'
import Router from 'next/router';

import '../styles/index.scss'
import '../styles/spacing.scss'

import Navigation from '../components/Navigation'

export default ({Component, pageProps}) => (
  <div>
    <Navigation />
    <Component {...pageProps} />
  </div>
)
