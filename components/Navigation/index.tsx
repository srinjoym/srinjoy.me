import React, {useState} from 'react'
import Link from 'next/link'

import { FrostedContainer } from './style'
import Container from '../Container'
import { useColorMode, Flex, Box, Text, Button, IconButton } from '@chakra-ui/core'
import { FiMenu, FiX } from 'react-icons/fi'

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
            justify="space-between"
            wrap="wrap"
            alignItems="center"
            py={2}
          >
            <Flex align="center" mr={5}>
              <Link href="/">
                <Button mx={4} variant="ghost">
                  Home
                </Button>
              </Link>
            </Flex>

            <Box display={{ sm: "block", md: "none" }} onClick={handleToggle} mx={4}>
              {!show &&
                <FiMenu color= {colorMode === "dark" ? "white" : "black"}/>
              }

              {show &&
                <FiX color= {colorMode === "dark" ? "white" : "black"}/>
              }
            </Box>

            <Box
              display={{xs: show ? "flex" : "none", md: "block"}}
              width={{ sm: "full", md: "auto" }}
              alignItems="start"
              flexDirection="column"
            >
              <Link href="/about">
                <Button mx={4} variant="ghost">
                    About
                </Button>
              </Link>

              <Link href="/photos">
                <Button mx={4} backgroundColor="transparent">
                  Photos
                </Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </FrostedContainer>

      {offset && <Box height="56px"/>}
    </div>
  )
}

export default Navigation
