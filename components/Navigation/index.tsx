import React, {useState} from 'react'
import Link from 'next/link'

import { FrostedContainer } from './style'
import Container from '../Container'
import { useColorMode, Flex, Box, Text, Button, IconButton } from '@chakra-ui/react'
import { FiMenu, FiX, FiUser, FiEdit2, FiCamera } from 'react-icons/fi'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

type NavProps = {
  wide: boolean,
  offset?: boolean
}

const Navigation = ({offset, wide = false}: NavProps) => {
  if (offset == null) {
    offset = true;
  }

  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  const { colorMode, toggleColorMode } = useColorMode()
  const hoverBackgroundColor = "#af9fff58"

  return (
    <div>
      <FrostedContainer backgroundColor={colorMode === "dark" ? "rgba(0, 0, 10, .7)":"rgba(255, 255, 255, .9)"}>
        <Container wide={wide}>
          <Flex
            as="nav"
            justify="space-between"
            wrap="wrap"
            alignItems="center"
            py={2}
          >
            <Flex align="center" mx={5}>
              <Link href="/">
                <Button variant="ghost" _hover={{backgroundColor: hoverBackgroundColor}} ml={-4}>
                  Home
                </Button>
              </Link>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle} mx={4}>
              {!show &&
                <FiMenu color= {colorMode === "dark" ? "white" : "black"}/>
              }

              {show &&
                <FiX color= {colorMode === "dark" ? "white" : "black"}/>
              }
            </Box>

            <Box
              display={{base: show ? "flex" : "none", md: "block"}}
              width={{ base: "full", md: "auto" }}
              alignItems="start"
              flexDirection="column"
            >
              <Link href="/about">
                <Button mx={2} variant="ghost" _hover={{backgroundColor: hoverBackgroundColor}}>
                  <Box mr={2}>
                    <FiUser color= {colorMode === "dark" ? "white" : "black"}/>
                  </Box>
                  About
                </Button>
              </Link>

              <Link href="/blog">
                <Button mx={2} variant="ghost" _hover={{backgroundColor: hoverBackgroundColor}}>
                  <Box mr={2}>
                    <FiEdit2 color= {colorMode === "dark" ? "white" : "black"}/>
                  </Box>
                  Blog
                </Button>
              </Link>

              <Link href="/photos">
                <Button mx={2} variant="ghost" _hover={{backgroundColor: hoverBackgroundColor}}>
                  <Box mr={2}>
                    <FiCamera color= {colorMode === "dark" ? "white" : "black"}/>
                  </Box>
                  Photos
                </Button>
              </Link>

              <IconButton
                onClick={toggleColorMode}
                variant="ghost"
                aria-label="Toggle color mode"
                icon={colorMode == "dark" ? <SunIcon/>:<MoonIcon/>}
                mx={4}
                _hover={{backgroundColor: hoverBackgroundColor}}
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
