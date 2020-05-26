import React from 'react'
import Hero from "../components/Hero"
import CardSection from '../components/CardSection'
import Navigation from "../components/Navigation"
import Container from "../components/Container"
import { Box } from '@chakra-ui/core'

import workData from '../data/experience'
import researchData from '../data/research'
import projectData from '../data/projects'
import ImageSection from '../components/FlickrImageSection'

import Flickr from 'flickr-sdk'
import StackSection from '../components/StackSection'
import Footer from '../components/Footer'


const Home = ({photoURLs}) => (
  <Box>
    <Navigation offset={false}/>

    <Hero className="pt-12" />

    <StackSection title="Research" data={researchData}/>
    <CardSection title="Projects" data={projectData}/>
    <ImageSection photoURLs={photoURLs}/>
    <Footer />
  </Box>
)

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const photoURLs = [
    "https://farm66.staticflickr.com/65535/49935850317_5d6515eed0_b.jpg",
    "https://farm66.staticflickr.com/65535/49935583121_6031d18bfe_b.jpg",
    "https://farm2.staticflickr.com/1746/40630882210_2d387971bc_b.jpg",
  ]
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      photoURLs: photoURLs
    }
  }
}

export default Home
