import React, {FunctionComponent} from 'react'
import { GradientBackground } from "./style"
import Container from "../Container"
import { Heading, Box } from "@chakra-ui/react"
import SocialIcons from "../Utilities/SocialIcons"

type HeroProps = {
  className?:string
}

const Hero:FunctionComponent<HeroProps> = ({className}) => (
  <GradientBackground>
    <Box pb={8} pt={28}>
      <Container >
        <Heading as="h1" size="2xl" color="white">
          Hi! I'm Srinjoy
        </Heading>

        <Heading size="lg" mt={2} color="white">
          I'm an engineer passionate about augmented reality, computer vision and education.
        </Heading>

        <SocialIcons my={6}/>
      </Container>
    </Box>
  </GradientBackground>
)

export default Hero
