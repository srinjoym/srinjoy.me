import React, {FunctionComponent} from 'react'
import { GradientBackground } from "./style"
import { Heading, Box, Text, Stack, Container } from "@chakra-ui/react"
import SocialIcons from "../Utilities/SocialIcons"
import Scene from "../Scene"

type HeroProps = {
  className?:string
  photoUrls?:string[]
}

const Hero:FunctionComponent<HeroProps> = ({className, photoUrls}) => (
  <>
    <Box pb={8} pt={28}>
      <Container maxW="container.md">
        <Stack direction={{base: "column", md: "row"}}>
          <Box width={{base: "100%", md: "50%"}}>
            <Heading as="h1" size="lg">
              Hi! I'm Srinjoy
            </Heading>

            <Text size="lg" mt={2}>
              I'm the founder of <a href="https://shasta.health">Shasta Health</a> - we build software to help physical therapists go independent. In my free time, I like to tinker with side projects and take photos
            </Text>

            <SocialIcons my={6}/>
          </Box>

          <Box width={{base: "100%", md: "50%"}} height="200px">
            <Scene photoUrls={photoUrls} />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
)

export default Hero
