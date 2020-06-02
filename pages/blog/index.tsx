import React from 'react'
import Container from '../../components/Container'
import { Heading, Box, Stack, Text, PseudoBox, Flex, Image } from '@chakra-ui/core'
import blogPostIndex from "../../data/blog"
import Link from 'next/link'
import Layout from '../../components/Layout'
import StackSection from '../../components/StackSection'

const Page = () => (
  <Layout title="Blog">
    <Container>
      <Heading mt={6}>
        Blog
      </Heading>
      <Heading size="md" mt={2} mb={4} color="gray.500">
        A work-in-progress set of articles on things I've built
      </Heading>
    </Container>

    <StackSection data={blogPostIndex}/>
  </Layout>
)

export default Page
