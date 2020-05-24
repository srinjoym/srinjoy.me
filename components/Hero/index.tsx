import React, {FunctionComponent} from 'react'
import {GradientBackground} from "./style"
import Container from "../Container"
import { Heading, Box, Button, Link } from "@chakra-ui/core"

type HeroProps = {
  className?:string
}

const Hero:FunctionComponent<HeroProps> = ({className}) => (
  <GradientBackground>
    <Box pb="100px;" pt="158px;">
      <Container >
        <Heading size="2xl">
          Hi! I'm Srinjoy
        </Heading>
        <Heading size="lg" mt={2}>
        I'm a Software Engineer at Microsoft building HoloLens
        </Heading>

        <Link href="/about">
          <Button mt={4}>
            More about me
          </Button>
        </Link>
      </Container>
    </Box>
  </GradientBackground>
)

export default Hero
