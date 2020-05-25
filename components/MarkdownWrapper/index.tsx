import React from 'react'
import Container from '../../components/Container'
import { Box } from '@chakra-ui/core'
import {MDXProvider} from '@mdx-js/react'
import Navigation from '../../components/Navigation'
import MarkdownComponents from '../Utilities/ChakraMarkdownRenderer'

const MarkdownWrapper = ({children}) => {
  // data from getInitialProps
  return (
    <Box mb={6}>
      <Navigation />
      <Container>
        <article>
          <div className="pt-4">
            <MDXProvider components={MarkdownComponents}>
              {children}
            </MDXProvider>
          </div>
        </article>
      </Container>
    </Box>
  )
}

export default MarkdownWrapper