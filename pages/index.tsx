import React from 'react'
import Hero from "../components/Hero"
import researchIndex from '../data/research'
import blogIndex from '../data/blog'
import ImageSection from '../components/FlickrImageSection'
import StackSection from '../components/StackSection'
import Layout from '../components/Layout'
const Flickr = require('flickr-sdk')
const flickr = new Flickr(process.env.FLICKR_API_KEY)

const Home = ({photoURLs}) => (
  <Layout title="Home" headerOffset={false}>
    <Hero className="pt-12" photoUrls={photoURLs} />

    <StackSection title="Blog" data={blogIndex.slice(0, 3)} seeMoreLink="/blog" />
    <StackSection title="Research" data={researchIndex} />

    <ImageSection photoURLs={photoURLs}/>
  </Layout>
)

export async function getStaticProps() {
  const streamResponse = await flickr.people.getPublicPhotos({
    user_id: '58074610@N03',
    extras: 'url_l'
  })

  const photos = streamResponse.body.photos.photo
  const horizontalPhotos = photos.filter(p => p.width_l > p.height_l)
  const latestURLs = horizontalPhotos.slice(0, 3).map(p => p.url_l)

  return {
    props: {
      photoURLs: latestURLs
    }
  }
}

export default Home
