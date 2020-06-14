import React, { useState } from 'react'
import { Box, Image, SimpleGrid, Link, Heading, Button, PseudoBox } from "@chakra-ui/core"
import Container from "../../components/Container"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import Gallery, { PhotoProps, RenderImageProps } from 'react-photo-gallery'
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

  const imageRenderer:React.FC<RenderImageProps> = ({ photo, margin, direction, index, top, left }) => {
    const cont:any = {
      backgroundColor: "#eee",
      cursor: "pointer",
      overflow: "hidden",
      position: "relative"
    };

    if (direction === "column") {
      cont.position = "absolute";
      cont.left = left;
      cont.top = top;
    }

    return(
      <PseudoBox
        style={{ margin, height: photo.height, width: photo.width, ...cont }}
        transition="all .25s ease-in-out"
        _hover={{transform: "scale(1.012)"}}
        onClick={() => openModal(index)}>
          <Image {...photo} />
      </PseudoBox>
    )
  }


  return (
    <div>
      <Navigation />
        <Container wide>
          <Heading my={6}>{title}</Heading>

          <Gallery photos={galleryLinks()} direction="row" renderImage={imageRenderer}/>

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
