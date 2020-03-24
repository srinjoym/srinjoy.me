import React from 'react'
import Navigation from '../components/Navigation'
import { Card, Image, Grid, Text, Container, Embed } from '@theme-ui/components'
import ReactPlayer from 'react-player'

var Flickr = require('flickr-sdk');
var flickr = new Flickr("4d90fb7dd188f44802a13f737c9c2fcc");

const imageURL = (photo) => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
}

function Home({ photos, photosets }){
  return (
    <div>
      <Navigation />
      <Container>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
      </Container>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  let photosets = []

  try {
    const res = await flickr.photosets.getList({
      user_id: '58074610@N03'
    })
    photosets = res.body.photosets.photoset
  } catch(err) {
    console.error('bonk', err);
  }

  let photos = []
  try {
    const res = await flickr.people.getPhotos({
      user_id: '58074610@N03'
    })
    photos = res.body.photos.photo
    console.log(photos.length)
  } catch(err) {
    console.error('bonk', err);
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      photos,
      photosets
    }
  }
}

export default Home
