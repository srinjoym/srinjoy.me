import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import { NextPage } from 'next'
import Container from '../../components/Container'
import ChakraMdRender from "../../components/Utilities/ChakraMarkdownRenderer"
import { Box } from '@chakra-ui/core'
import Navigation from '../../components/Navigation'

type BlogPostProps = {
  content: string
  data: any
}

const BlogPost:NextPage<BlogPostProps> = ({content, data}) => {
  // data from getInitialProps
  return (
    <Box mb={6}>
      <Navigation />
      <Container>
        <article>
          <div className="pt-4">
            <ReactMarkdown renderers={ChakraMdRender()} source={content} escapeHtml={false} />
          </div>
        </article>
      </Container>
    </Box>
  )
}

BlogPost.getInitialProps = async function(context) {
  // context contains the query param
  const { slug } = context.query
  // grab the file in the posts dir based on the slug
  const content = await import(`../../markdown/${slug}.md`);

  //gray-matter parses the yaml frontmatter from the md body
  return matter(content.default)
}

export default BlogPost