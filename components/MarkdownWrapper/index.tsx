import React from 'react'
import Container from '../../components/Container'
import { Box } from '@chakra-ui/core'
import {MDXProvider} from '@mdx-js/react'
import Navigation from '../../components/Navigation'
import MarkdownComponents from '../Utilities/ChakraMarkdownRenderer'
import Footer from '../Footer'

const MarkdownWrapper = ({children}) => {
  // data from getInitialProps
  return (
    <Box>
      <Navigation />
      <Container>
        <MDXProvider components={MarkdownComponents}>
          {children}
        </MDXProvider>
      </Container>
      <Footer />
    </Box>
  )
}

export default MarkdownWrapper