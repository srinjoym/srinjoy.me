import React from 'react'
import Hero from "../components/Hero"
import ProjectSection from '../components/ProjectSection'
import Container from "../components/Container"
import { Alert, AlertIcon, Link } from '@chakra-ui/core'

const Home = () => (
  <div>
    <Alert status="error">
      <Container>
      <AlertIcon />
      <Link href="covid19">
        Learn more about COVID-19 and track President Trump's response...
      </Link>
      </Container>
    </Alert>

    <Hero className="pt-12" />
    <ProjectSection />
  </div>
)

export default Home
