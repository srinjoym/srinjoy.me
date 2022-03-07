import React from 'react'
import Container from '../components/Container'
import { Heading, Box, Image, Link, Flex, Button } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown/with-html'
import Layout from '../components/Layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const bio = `
  👋 Hi I'm Srinjoy! I'm a Software Engineer at Microsoft in Seattle, WA. I work on the [Microsoft Hololens](https://www.microsoft.com/en-us/hololens), an Augmented Reality headset designed for enterprises. I graduated from the University of Texas at Austin with a degree in Electrical and Computer Engineering 🤘

  <br />

  While at UT, I conducted computer vision research in Human-Robot Interaction under Dr. Andrea Thomaz and Dr. Scott Niekum. I explored new 6 D.O.F. object tracking algorithms, gaze tracking methods and real-time environment mapping.
  I also helped develop software for the lab's custom humanoid robot named Poli!

  <br />

  Previously, I worked part-time as a Software Engineer at GitHub. I worked on projects such as [GitHub Classroom](https://github.com/srinjoym/classroom) and the GitHub Profile.
`

const Page = () => (
  <Layout title="About">
    <Container>
      <Flex alignItems="center" my={6}>
        <Heading flexGrow={1}>
          About Me
        </Heading>

        <Link
          href="https://drive.google.com/file/d/0B3RGMraz9IZlNi1WZ0ZJU01fdTA/view?usp=sharing"
          _hover={{textDecoration: "none"}}
        >
          <Button rightIcon={<ExternalLinkIcon />}>
            Resume
          </Button>
        </Link>
      </Flex>

      <ReactMarkdown source={bio} renderers={{link: Link}} escapeHtml={false} />

      <Image width="500px" rounded="lg" mt={6} marginLeft="auto" marginRight="auto" src={('/img/prof.jpg')} />
    </Container>
  </Layout>
)

export default Page
