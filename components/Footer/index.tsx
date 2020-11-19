import React, {FunctionComponent} from 'react'
import Container from "../Container"
import { Heading, Box, Button, Text, Flex, Link, useColorMode } from "@chakra-ui/react"
import SocialIcons from "../Utilities/SocialIcons"

const Footer:FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box borderTopWidth="1px" mt={8}>
      <Container>
        <Flex alignItems="center">
          <Box flexGrow={1} display={{xs: "none", md: "flex"}}>
            <Text>
              This website is open-source on
              <Link href="https://github.com/srinjoym/srinjoy.me.v3" color="blue.500"> GitHub</Link>
            </Text>
          </Box>
          <SocialIcons my={6} color={colorMode === "dark" ? "white":"black"}/>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
