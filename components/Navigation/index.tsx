import React, {useState} from 'react'
import Link from 'next/link'

import { FrostedContainer } from './style'
import Container from '../Container'
import { useColorMode, Flex, Box, Text, Button, IconButton } from '@chakra-ui/core'
import { FiMenu, FiX } from 'react-icons/fi'

type NavProps = {
  offset?: boolean
}

const Navigation = ({offset}: NavProps) => {
  if (offset == null) {
    offset = true;
  }

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <FrostedContainer backgroundColor={colorMode === "dark" ? "rgba(0, 0, 0, .9)":"rgba(255, 255, 255, .9)"}>
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
                <Button mx={4} variant="ghost" _hover={{backgroundColor: "rgba(85, 51, 255, .35)"}}>
                  Home
                </Button>
              </Link>
            </Flex>

            <Box display={{ xs: "block", md: "none" }} onClick={handleToggle} mx={4}>
              {!show &&
                <FiMenu color= {colorMode === "dark" ? "white" : "black"}/>
              }

              {show &&
                <FiX color= {colorMode === "dark" ? "white" : "black"}/>
              }
            </Box>

            <Box
              display={{xs: show ? "flex" : "none", md: "block"}}
              width={{ xs: "full", md: "auto" }}
              alignItems="start"
              flexDirection="column"
            >
              <Link href="/about">
                <Button mx={4} variant="ghost" _hover={{backgroundColor: "rgba(85, 51, 255, .35)"}}>
                    About
                </Button>
              </Link>

              <Link href="/photos">
                <Button mx={4} variant="ghost" _hover={{backgroundColor: "rgba(85, 51, 255, .35)"}}>
                  Photos
                </Button>
              </Link>

              <IconButton
                onClick={toggleColorMode}
                variant="ghost"
                aria-label="Toggle color mode"
                icon={colorMode == "dark" ? "sun":"moon"}
                ml={4}
                _hover={{backgroundColor: "rgba(85, 51, 255, .35)"}}
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
