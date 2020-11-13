import React from 'react'
import Container from '../../components/Container'
import { Heading, Box, Stack, Text, PseudoBox, Flex, Image } from '@chakra-ui/core'
import Layout from '../../components/Layout'
import dynamic from "next/dynamic";
const ThreeCanvas = dynamic(() => import('../../components/ThreeCanvas'), {
  ssr: false,
})

const Page = () => (
  <Layout title="Experiments">
    <Container>
      <Heading mt={6}>
        Experiments
      </Heading>
      <Heading size="md" mt={2} mb={4} color="gray.500">
        3D scenes exploring mixed reality
      </Heading>
    </Container>

    <ThreeCanvas />
  </Layout>
)

export default Page
