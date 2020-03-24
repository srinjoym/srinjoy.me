import React, {useState} from 'react'
import Link from 'next/link'

import { FrostedContainer } from './style'
import Container from '../Container'
import { Flex, Heading, Box, Text, Button } from '@chakra-ui/core'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Navigation = () => {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div>
      <FrostedContainer>
        <Container>
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            py={2}
          >
            <Flex align="center" mr={5}>
              <Button mx={4} backgroundColor="transparent">
                <Link href="/">
                  <a className="navbar-item">Home</a>
                </Link>
              </Button>
            </Flex>

            <Box
              mt={{ base: 4, md: 0 }}
            >
              <Button mx={4} backgroundColor="transparent">
                <Link href="/about">
                  <a className="navbar-item">About</a>
                </Link>
              </Button>

              <Button mx={4} backgroundColor="transparent">
                <Link href="/blog">
                  <a className="navbar-item">Blog</a>
                </Link>
              </Button>

              <Button mx={4} backgroundColor="transparent">
                <Link href="/photos">
                  <a className="navbar-item">Photos</a>
                </Link>
              </Button>
            </Box>
          </Flex>
        </Container>
      </FrostedContainer>

      <Box height="56px"/>
    </div>
  )
}

export default Navigation
