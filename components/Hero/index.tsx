import React, {FunctionComponent} from 'react'
import {GradientBackground} from "./style"
import Container from "../Container"
import { Heading, Box } from "@chakra-ui/core"

type HeroProps = {
  className?:string
}

const Hero:FunctionComponent<HeroProps> = ({className}) => (
  <GradientBackground>
    <Box py="100px;">
      <Container >
        <Heading size="2xl">
          Hi! I'm Srinjoy
        </Heading>
        <Heading size="lg">
        I'm a Software Engineer and Computer Vision Researcher
        </Heading>
      </Container>
    </Box>
  </GradientBackground>
)

export default Hero
