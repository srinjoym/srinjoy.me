import React, {useState} from 'react'
import Link from 'next/link'

import { FrostedContainer } from './style'
import Container from '../Container'
import { useColorMode, Flex, Box, Text, Button, IconButton } from '@chakra-ui/core'

type NavProps = {
  offset?: boolean
}

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Navigation = ({offset}: NavProps) => {
  if (offset == null) {
    offset = true;
  }

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode()

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
              <Link href="/">
                <Button mx={4} backgroundColor="transparent">
                  Home
                </Button>
              </Link>
            </Flex>

            <Box display={{ sm: "block", md: "none" }} onClick={handleToggle} mx={4}>
              <svg
                fill={colorMode === "dark" ? "white" : "black"}
                width="12px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </Box>

            <Box
              display={{xs: show ? "block" : "none", md: "block"}}
              width={{ sm: "full", md: "auto" }}
              mt={{ base: 4, md: 0 }}
            >
              <Link href="/about">
                <Button mx={4} backgroundColor="transparent">
                    About
                </Button>
              </Link>

              <Link href="/blog">
                <Button mx={4} backgroundColor="transparent">
                  Blog
                </Button>
              </Link>

              <Link href="/photos">
                <Button mx={4} backgroundColor="transparent">
                  Photos
                </Button>
              </Link>

              <IconButton
                onClick={toggleColorMode}
                backgroundColor="transparent"
                aria-label="Toggle color mode"
                icon={colorMode == "dark" ? "sun":"moon"}
              />
            </Box>
          </Flex>
        </Container>
      </FrostedContainer>

      {offset && <Box height="56px"/>}
    </div>
  )
}

export default Navigation
