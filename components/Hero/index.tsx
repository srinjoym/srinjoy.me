import React, {FunctionComponent} from 'react'
import { GradientBackground, AbsoluteBabylon } from "./style"
import Container from "../Container"
import { Heading, Box } from "@chakra-ui/react"
import SocialIcons from "../Utilities/SocialIcons"

type HeroProps = {
  className?:string
}

const Hero:FunctionComponent<HeroProps> = ({className}) => (
  <GradientBackground>
  <Box pt="158px;">
    
      <Container position="absolute" left="0" right="0">
        <Heading as="h1" size="2xl">
          Hi! I'm Srinjoy
        </Heading>

        <Heading size="lg" mt={2}>
          I'm a Software Engineer at Microsoft building HoloLens
        </Heading>

        <SocialIcons my={6}/>
      </Container>

      <AbsoluteBabylon />
    </Box>
  </GradientBackground>
)

export default Hero
