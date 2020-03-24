import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import '../styles/index.scss'
import '../styles/spacing.scss'

import Navigation from '../components/Navigation'
import defaultTheme from '../components/Theme';
import { theme } from "@chakra-ui/core";

export default ({Component, pageProps}) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Navigation />
    <Component {...pageProps} />
  </ThemeProvider>
)
