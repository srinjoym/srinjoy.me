import React, { useEffect } from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import ReactGA from 'react-ga'
import Router from 'next/router'
import { DefaultSeo } from 'next-seo'
import '../styles/index.scss'
import '../styles/spacing.scss'
import { theme, colorConfig } from '../components/Theme'

export default ({Component, pageProps}) => {

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize('UA-56121800-2')
      ReactGA.set({siteVersion: 'v3'}) // To compare engagement between v1 and v3

      window.GA_INITIALIZED = true
    }

    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <CSSReset config={colorConfig}/>
        <DefaultSeo titleTemplate="%s | Srinjoy Majumdar"/>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}
