import React, { useEffect } from 'react'
import { ChakraProvider, CSSReset, ColorModeProvider } from '@chakra-ui/react'
import ReactGA from 'react-ga'
import Router from 'next/router'
import 'react-notion-x/src/styles.css'
import { Chakra } from '../components/Chakra'
import { RootSeo } from '../components/Seo'

export default ({Component, pageProps, cookies}) => {
  useEffect(() => {
    if (!window['GA_INITIALIZED']) {
      ReactGA.initialize('UA-56121800-2')
      ReactGA.set({siteVersion: 'v3'}) // To compare engagement between v1 and v3

      window['GA_INITIALIZED'] = true
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
    <Chakra cookies={cookies}>
      <RootSeo />
      <Component {...pageProps} />
    </Chakra>
  )
}
