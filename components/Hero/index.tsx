import React, {FunctionComponent} from 'react'
import { GradientBackground } from "./style"
import Container from "../Container"
import { Heading, Box, Text, Stack } from "@chakra-ui/react"
import SocialIcons from "../Utilities/SocialIcons"
import Scene from "../Scene"

type HeroProps = {
  className?:string
}

const Hero:FunctionComponent<HeroProps> = ({className}) => (
  <>
    <Box pb={8} pt={28}>
      <Container>
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

          <Scene />
        </Stack>
      </Container>
    </Box>
  </>
)

export default Hero
