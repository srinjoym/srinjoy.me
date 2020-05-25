import React, {FunctionComponent} from 'react'
import { GradientBackground, GradientText } from "./style"
import Container from "../Container"
import { Heading, Box, Button, Link } from "@chakra-ui/core"
import SocialIcons from "../Utilities/SocialIcons"

type HeroProps = {
  className?:string
}

const Hero:FunctionComponent<HeroProps> = ({className}) => (
  <GradientBackground>
    <Box pb="100px;" pt="158px;">
      <Container >
        <GradientText size="2xl" color="white">
          Hi! I'm Srinjoy
        </GradientText>

        <Heading size="lg" mt={2} color="white">
        I'm a Software Engineer at Microsoft building HoloLens
        </Heading>

        <SocialIcons my={6}/>
      </Container>
    </Box>
  </GradientBackground>
)

export default Hero
