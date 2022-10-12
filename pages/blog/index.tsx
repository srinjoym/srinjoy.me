import React from 'react'
import { Container, Heading } from '@chakra-ui/react'
import blogPostIndex from "../../data/blog"
import Link from 'next/link'
import Layout from '../../components/Layout'
import StackSection from '../../components/StackSection'

const Page = () => (
  <Layout title="Blog">
    <Container maxW="container.md">
      <Heading size="lg" mt={6}>
        Blog
      </Heading>
      <Heading size="sm" mt={2} mb={4} color="gray.500">
        A work-in-progress set of articles on things I've built
      </Heading>
    </Container>

    <StackSection data={blogPostIndex}/>
  </Layout>
)

export default Page
