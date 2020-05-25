import React from 'react'
import Container from '../components/Container'
import { Heading, Box, Image, Link } from '@chakra-ui/core'
import Navigation from '../components/Navigation'
import ReactMarkdown from 'react-markdown/with-html'
import Footer from '../components/Footer'

const bio = `
  👋 Hi I'm Srinjoy! I'm a Software Engineer at Microsoft building Mixed Reality apps for the Hololens. This past year, I graduated from the University of Texas at Austin with a degree in Electrical and Computer Engineering 🤘

  <br />

  While at UT, I conducted computer vision research in Human-Robot Interaction under Dr. Andrea Thomaz and Dr. Scott Niekum. I explored new 6 D.O.F. object tracking algorithms, gaze tracking methods and real-time environment mapping.
  I also helped develop software for the lab's custom humanoid robot named Poli!

  <br />

  Previously, I worked part-time as a Software Engineer at GitHub while going to school. I worked on various projects such as developing [GitHub Classroom](https://github.com/srinjoym/classroom) and other social features on GitHub.
`

const Page = () => (
  <Box>
    <Navigation />
    <Container>
      <Heading marginTop="50px" pb={6}>
        About Me
      </Heading>

      <ReactMarkdown source={bio} renderers={{link: Link}} escapeHtml={false} />

      <Image width="300px" rounded="lg" mt={6} marginLeft="auto" marginRight="auto" src={('/img/prof.jpg')} />
    </Container>
    <Footer />
  </Box>
)

export default Page
