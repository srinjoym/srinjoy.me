import React from 'react'
import Container from '../../components/Container'
import { Heading, Box, Stack, Text, PseudoBox, Flex, Image } from '@chakra-ui/core'
import blogPostIndex from "../../data/blog"
import Link from 'next/link'
import Layout from '../../components/Layout'

const Feature = ({ title, desc, link, imageLink, date, ...rest }) => {
  return (
    <Flex my={5} {...rest}>
      <Box flexGrow={1}>
        <Link href={link}>
          <Heading cursor="pointer" fontSize="xl">{title}</Heading>
        </Link>
        <Text mt={2}>{desc}</Text>
        <Text mt={2} color="gray.500">{date}</Text>
      </Box>

      <Image src={imageLink} rounded="lg" maxH="100px" maxW="100px" ml={2}/>
    </Flex>
  )
}

const Page = () => (
  <Layout title="Blog">
    <Container mx="auto">
      <Heading mt={6}>
        Blog
      </Heading>
      <Heading size="md" my={2} color="gray.500">
        A work-in-progress set of articles on things I've built
      </Heading>

      <Stack mt={6}>
        {blogPostIndex.map(postInfo => (
          <Feature
            title={postInfo.title}
            desc={postInfo.text}
            link={postInfo.link}
            imageLink={postInfo.image}
            date={postInfo.published}
          />
        ))}
      </Stack>
    </Container>
  </Layout>
)

export default Page
