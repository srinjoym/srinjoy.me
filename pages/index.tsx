import React from 'react'
import Hero from "../components/Hero"
import CardSection from '../components/CardSection'
import Container from "../components/Container"
import { Alert, AlertIcon, Link } from '@chakra-ui/core'

import workData from '../data/experience'
import researchData from '../data/research'
import projectData from '../data/projects'

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

    <CardSection title="Where I've Worked" data={workData}/>
    <CardSection title="Research" data={researchData}/>
    <CardSection title="Projects" data={projectData}/>
  </div>
)

export default Home
