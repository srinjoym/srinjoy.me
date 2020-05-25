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


const Home = ({photos}) => (
  <Box mb={10}>
    <Navigation offset={false}/>

    <Hero className="pt-12" />

    <StackSection title="Research" data={researchData}/>
    <CardSection title="Projects" data={projectData}/>
    <ImageSection photos={photos}/>
  </Box>
)

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const flickr = new Flickr(process.env.FLICKR_API_KEY);

  let photos = []

  try {
    const res = await flickr.people.getPhotos({
      user_id: '58074610@N03',
      primary_photo_extras: 'url_m',
      per_page: 3
    })

    photos = res.body.photos.photo.slice(0, 3)
  } catch(err) {
    console.error('bonk', err);
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      photos
    }
  }
}

export default Home
