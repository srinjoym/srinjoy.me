import React, {FunctionComponent} from 'react'
import { GradientBackground } from "./style"
import Container from "../Container"
import { Heading, Box, Text } from "@chakra-ui/react"
import SocialIcons from "../Utilities/SocialIcons"

type HeroProps = {
  className?:string
}

const Hero:FunctionComponent<HeroProps> = ({className}) => (
  <>
    <Box pb={8} pt={28}>
      <Container >
        <Heading as="h1" size="lg">
          Hi! I'm Srinjoy
        </Heading>

        <Text size="lg" mt={2}>
          I'm an engineer passionate about augmented reality, computer vision and education.
        </Text>

        <SocialIcons my={6}/>
      </Container>
    </Box>
  </>
)

export default Hero
