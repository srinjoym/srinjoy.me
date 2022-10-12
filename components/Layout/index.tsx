import React from 'react'
import { Box } from '@chakra-ui/react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

const Layout = ({children, title, wide=false, headerOffset=true, ...rest}) => {
  const openGraph = {
    url: 'https://srinjoy.me',
    type: 'website',
    title: 'srinjoy.me',
    description: "Srinjoy Majumdar's personal website",
    images: [
      {
        url: 'https://github.com/srinjoym/srinjoy.me/blob/master/public/img/srinjoy.me-og.png?raw=true',
        width: 1200,
        height: 630,
        alt: 'Og Image Alt',
      },
    ]
  };

  return (
    <Box {...rest}>
      <NextSeo title={title} noindex={false} openGraph={openGraph} />
      <Navigation offset={headerOffset} wide={wide} />
        {children}
      <Footer wide={wide} />
    </Box>
  )
}

export default Layout