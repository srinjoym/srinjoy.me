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
    <Box
      pb="50px;" pt="158px;"
      position="absolute"
      marginLeft="auto"
      marginRight="auto"
      left="0" right="0"
    >
      <Container>
        <Heading as="h1" size="2xl" color="white">
          Hi! I'm Srinjoy
        </Heading>

        <Heading size="lg" mt={2} color="white">
        I'm a Software Engineer at Microsoft building HoloLens
        </Heading>

        <SocialIcons my={6}/>
      </Container>
    </Box>
    <Box height="500px" position="relative" top="0">
      <AbsoluteBabylon />
    </Box>
    {/* <Box position="relative" top="0" bottom="0">
      // <AbsoluteBabylon />
    </Box> */}
  </GradientBackground>
)

export default Hero
