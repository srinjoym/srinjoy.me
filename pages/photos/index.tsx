import React, { useState } from 'react'
import { Box, Image, SimpleGrid, Link, Heading, Button } from "@chakra-ui/core"
import Container from "../../components/Container"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import Gallery, {PhotoProps} from 'react-photo-gallery'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

var Flickr = require('flickr-sdk')
var flickr = new Flickr(process.env.FLICKR_API_KEY)

const imageURL = (photo, size="z") => {
  if (photo == null)
    return;
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
}

const Photos = ({ title, photos, sizes }) => {
  const PAGE_SIZE = 20
  const thumbnailURLs = photos.map(photo => imageURL(photo, "sq"))
  const lightboxURLs = photos.map(photo => imageURL(photo, "b"))

  const [loadMoreEnabled, setLoadMoreEnabled] = useState(thumbnailURLs > PAGE_SIZE)
  const [numShownPhotos, setNumShownPhotos] = useState(PAGE_SIZE)
  const [isOpen, setIsOpen] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(-1)

  const openModal = (index) => {
    setCurrentPhoto(index);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const loadNextPhotos = () => {
    setNumShownPhotos(Math.min(numShownPhotos+PAGE_SIZE, thumbnailURLs.length))
    if (thumbnailURLs.length === numShownPhotos) {
      setLoadMoreEnabled(false)
    }
  }

  const galleryLinks = ():PhotoProps[] => {
    const links = photos.slice(0, numShownPhotos).map(photo => ({
      src: sizes[photo.id][6].source,
      width: sizes[photo.id][6].width,
      height: sizes[photo.id][6].height
    }))

    return links
  }

  return (
    <div>
      <Navigation />
        <Container>
          <Heading mt={6}>{title}</Heading>

          {/* <SimpleGrid columns={{xs: 2, md:3}} spacing={{xs: 3, md: 5}} pt={6}>
            {thumbnailURLs.slice(0, numShownPhotos).map((url, index) => (
              <Link
                transition="all .25s ease-in-out"
                _hover={{transform: "scale(1.012)"}}>
                <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" borderStyle="none" position="relative" onClick={() => openModal(index)}>
                  <Image src={url} />
                </Box>
              </Link>
            ))}
          </SimpleGrid> */}
          <Gallery photos={galleryLinks()} direction="column"/>

          <Button onClick={loadNextPhotos} mt={8} mb={2} mx="auto" display="block">Load More</Button>

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
  let title = "Photos"
  let photos = []
  let sizes = {}

  try {
    const res = await flickr.people.getPublicPhotos({
      user_id: '58074610@N03',
      primary_photo_extras: 'url_m'
    })

    photos = res.body.photos.photo

    const reqs = photos.map(async photo => {
      const sizeRes = await flickr.photos.getSizes({
        photo_id: photo.id
      })
      sizes[photo.id] = sizeRes.body.sizes.size
    })
    await Promise.all(reqs)

  } catch(err) {
    console.error('bonk', err);
  }

  return {
    props: {
      title: title,
      photos,
      sizes
    }
  }
}

export default Photos
