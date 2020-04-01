import React from 'react'
import Container from '../components/Container'
import { Heading, Box, Image, Link } from '@chakra-ui/core'
import Navigation from '../components/Navigation'
import ReactMarkdown from 'react-markdown'

const bio = `
  👋 Hi I'm Srinjoy! I'm a Software Engineer at Microsoft building AR apps for the Hololens.
  This past year, I graduated from the University of Texas at Austin with a degree in Electrical and Computer Engineering.

  At UT, I conducted computer vision research in the Human-Robot Interaction domain under Dr. Andrea Thomaz and Dr. Scott Niekum.

  Previously, I worked part-time as a Software Engineer at GitHub. I worked on various projects such as developing [GitHub Classroom](https://github.com/srinjoym/classroom)
  developing products in education and social networking.
`

const urlTransform = (uri) => (
  <Link />
)

const Page = () => (
  <Box>
    <Navigation />
    <Container>
      <Heading marginTop="50px" pb={6}>
        About Me
      </Heading>

      <ReactMarkdown source={bio} renderers={{link: Link}} />

      <Image width="300px" rounded="lg" mt={6} marginLeft="auto" marginRight="auto" src={('/img/prof.jpg')} />
    </Container>
  </Box>
)

export default Page
