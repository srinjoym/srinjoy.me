import React, {FunctionComponent} from 'react'
import { GradientBackground } from "./style"
import { Heading, Box, Text, Stack, Container } from "@chakra-ui/react"
import SocialIcons from "../Utilities/SocialIcons"
import Scene from "../scene"

type HeroProps = {
  className?:string
  photoUrls?:string[]
}

const Hero:FunctionComponent<HeroProps> = ({className, photoUrls}) => (
  <>
    <Box pb={8} pt={28}>
      <Container maxW="container.md">
        <Stack direction={{base: "column", md: "row"}}>
          <Box>
            <Heading as="h1" size="lg">
              Hi! I'm Srinjoy
            </Heading>

            <Text size="lg" mt={2}>
              I'm an engineer passionate about augmented reality, computer vision and education.
            </Text>

            <SocialIcons my={6}/>
          </Box>

          <Scene photoUrls={photoUrls} />
        </Stack>
      </Container>
    </Box>
  </>
)

export default Hero
