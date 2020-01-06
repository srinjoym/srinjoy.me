import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { NextPage } from 'next'

const htmlParser = require('react-markdown/plugins/html-parser')

type BlogPostProps = {
  content: string
  data: any
}

const BlogPost:NextPage<BlogPostProps> = ({content, data}) => {
  // data from getInitialProps
  return (
    <div className="container mx-auto">
      <article>
        <h1>{data.title}</h1>
        <div className="pt-12">
          <ReactMarkdown className="content" source={content} escapeHtml={false} astPlugins={[htmlParser()]} />
        </div>
      </article>
    </div>
  )
}

BlogPost.getInitialProps = async function(context) {
  // context contains the query param
  const { slug } = context.query
  // grab the file in the posts dir based on the slug
  const content = await import(`../../posts/${slug}.md`)

  //gray-matter parses the yaml frontmatter from the md body
  return matter(content.default)
}

export default BlogPost