import React, {useState} from 'react'
import Link from 'next/link'

import { FrostedContainer } from './style'
import { useColorMode, Flex, Box, Text, Button, IconButton, Container } from '@chakra-ui/react'
import { FiMenu, FiX, FiUser, FiEdit2, FiCamera, FiHome } from 'react-icons/fi'
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
      <FrostedContainer backgroundColor={colorMode === "dark" ? "rgba(26, 32, 44, .7)":"rgba(255, 255, 255, .9)"}>
        <Container maxW={wide ? "container.lg":"container.md"}>
          <Flex
            as="nav"
            justify="space-between"
            wrap="wrap"
            alignItems="center"
            py={2}
          >
            <Flex align="center">
              <Link href="/">
                <IconButton
                  variant="ghost"
                  _hover={{backgroundColor: hoverBackgroundColor}}
                  aria-label="Home"
                  icon={<FiHome color= {colorMode === "dark" ? "white" : "black"}/>}
                />
              </Link>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle} mr={2}>
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
                <Button mr={2} variant="ghost" _hover={{backgroundColor: hoverBackgroundColor}}>
                  About
                </Button>
              </Link>

              <Link href="/blog">
                <Button mr={2} variant="ghost" _hover={{backgroundColor: hoverBackgroundColor}}>
                  Blog
                </Button>
              </Link>

              <Link href="/photos">
                <Button mr={2} variant="ghost" _hover={{backgroundColor: hoverBackgroundColor}}>
                  Photos
                </Button>
              </Link>

              <IconButton
                onClick={toggleColorMode}
                variant="ghost"
                aria-label="Toggle color mode"
                icon={colorMode == "dark" ? <SunIcon/>:<MoonIcon/>}
                _hover={{backgroundColor: hoverBackgroundColor}}
                ml={1}
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
