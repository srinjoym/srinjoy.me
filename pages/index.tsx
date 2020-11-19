import React from 'react'
import Hero from "../components/Hero"
import CardSection from '../components/CardSection'
import { Box } from '@chakra-ui/react'

import researchIndex from '../data/research'
import blogIndex from '../data/blog'
import ImageSection from '../components/FlickrImageSection'

import Flickr from 'flickr-sdk'
import StackSection from '../components/StackSection'
import Layout from '../components/Layout'

const Home = ({photoURLs}) => (
  <Layout title="Home" headerOffset={false}>
    <Hero className="pt-12" />

    <StackSection title="Blog" data={blogIndex.slice(0, 3)} seeMoreLink="/blog" />
    <StackSection title="Research" data={researchIndex} />

    <ImageSection photoURLs={photoURLs}/>
  </Layout>
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
