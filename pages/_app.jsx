import React from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import '../styles/index.scss'
import '../styles/spacing.scss'

import myTheme from '../components/Theme';

export default ({Component, pageProps}) => (
  <ThemeProvider theme={myTheme}>
    {/* <ColorModeProvider> */}
      <CSSReset />
      <Component {...pageProps} />
    {/* </ColorModeProvider> */}
  </ThemeProvider>
)
