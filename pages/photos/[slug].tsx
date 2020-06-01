import React, { useState } from 'react'
import { Box, Image, SimpleGrid, Link, Heading } from "@chakra-ui/core"
import Container from "../../components/Container"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

var Flickr = require('flickr-sdk');
var flickr = new Flickr(process.env.FLICKR_API_KEY);

const imageURL = (photo, size="z") => {
  if (photo == null)
    return;
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
}



function Home({ title, thumbnailURLs, lightboxURLs }){
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(-1);

  const openModal = (index) => {
    setCurrentPhoto(index);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <Navigation />
      <Container>
        <Heading mt={6}>{title}</Heading>

        <SimpleGrid columns={{xs: 2, md:3}} spacing={{xs: 3, md: 5}} pt={6}>
          {thumbnailURLs.map((url, index) => (
            <Link
              transition="all .25s ease-in-out"
              _hover={{transform: "scale(1.012)"}}>
              <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" borderStyle="none" position="relative" onClick={() => openModal(index)}>
                <Image src={url} />
              </Box>
            </Link>
          ))}
        </SimpleGrid>

        {isOpen && (
          <Lightbox
            mainSrc={lightboxURLs[currentPhoto]}
            nextSrc={lightboxURLs[(currentPhoto + 1) % lightboxURLs.length]}
            prevSrc={lightboxURLs[(currentPhoto + lightboxURLs.length - 1) % lightboxURLs.length]}
            onCloseRequest={closeModal}
            onMovePrevRequest={() => setCurrentPhoto((currentPhoto-1)%lightboxURLs.length)}
            onMoveNextRequest={() => setCurrentPhoto((currentPhoto+1)%lightboxURLs.length)}
          />
        )}
      </Container>
      <Footer />
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  let title = ""
  let photos = []

  try {
    const infoRes = await flickr.photosets.getInfo({
      user_id: '58074610@N03',
      photoset_id: params.slug
    })

    const photosRes = await flickr.photosets.getPhotos({
      user_id: '58074610@N03',
      photoset_id: params.slug
    })
    title = infoRes.body.photoset.title._content
    photos = photosRes.body.photoset.photo
  } catch(err) {
    console.error('bonk', err);
  }

  let thumbnailURLs = photos.map(photo => imageURL(photo, "z"))
  let lightboxURLs = photos.map(photo => imageURL(photo, "b"))

  return {
    props: {
      title: title,
      thumbnailURLs,
      lightboxURLs
    }
  }
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  let photosets = []
  try {
    const res = await flickr.photosets.getList({
      user_id: '58074610@N03'
    })
    photosets = res.body.photosets.photoset
  } catch(err) {
    console.error('bonk', err);
  }

  // Get the paths we want to pre-render based on posts
  const paths = photosets.map(photoset => `/photos/${photoset.id}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export default Home
