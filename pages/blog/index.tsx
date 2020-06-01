import React from 'react'
import Container from '../../components/Container'
import { Heading, Box, Stack, Text, PseudoBox } from '@chakra-ui/core'
import blogPostIndex from "../../data/blog"
import Link from 'next/link'
import Layout from '../../components/Layout'

const Feature = ({ title, desc, link, ...rest }) => {
  return (
    <Box my={4} {...rest}>
      <PseudoBox cursor="pointer" transition="all .25s ease-in-out" color="blue.500" _hover={{color: "blue.600"}}>
        <Link href={link}>
          <Heading fontSize="xl">{title}</Heading>
        </Link>
      </PseudoBox>
      <Text mt={2}>{desc}</Text>
    </Box>
  )
}

const Page = () => (
  <Layout title="Blog">
    <Container>
      <Heading mt={6}>
        Blog
      </Heading>

      <Stack mt={6}>
        {blogPostIndex.map(postInfo => (
          <Feature
            title={postInfo.title}
            desc={postInfo.text}
            link={postInfo.link}
          />
        ))}
      </Stack>
    </Container>
  </Layout>
)

export default Page
