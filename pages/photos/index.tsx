import React, { useState } from 'react'
import { Box, Image, SimpleGrid, Text, Heading, Button, PseudoBox } from "@chakra-ui/core"
import NextLink from 'next/link'
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

const Photos = ({ title, photosets, photos, sizes }) => {
  const PAGE_SIZE = 20
  const thumbnailURLs = photos.map(photo => imageURL(photo, "sq"))
  const lightboxURLs = photos.map(photo => imageURL(photo, "b"))

  const [loadMoreEnabled, setLoadMoreEnabled] = useState(thumbnailURLs.length > PAGE_SIZE)
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
    if (numShownPhotos + PAGE_SIZE >= thumbnailURLs.length) {
      setLoadMoreEnabled(false);
    }

    setNumShownPhotos(Math.min(numShownPhotos+PAGE_SIZE, thumbnailURLs.length));
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
        rounded="md"
        style={{ margin, height: photo.height, width: photo.width, ...cont }}
        transition="all .25s ease-in-out"
        _hover={{transform: "scale(1.006)"}}
        onClick={() => openModal(index)}>
          <Image {...photo} />
      </PseudoBox>
    )
  }


  return (
    <div>
      <Navigation />
        <Container wide>
          <Heading mt={6}>{title}</Heading>
          <Heading size="md" mt={2} mb={4} color="gray.500">
            I'm an amateur photographer on my days off. Mostly shot on a Nikon D5100
          </Heading>

          <Heading size="lg" pb={2} pt={5}>Collections</Heading>
          <SimpleGrid columns={5} spacing={2} pb={6}>
            {photosets.map(photoset => (
              <NextLink key={photoset.id} href={`/photos/[slug]`} as={`/photos/${photoset.id}`}>
                <PseudoBox
                  cursor="pointer"
                  // maxW="100px"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                  transition="all .25s ease-in-out"
                  _hover={{transform: "scale(1.012)"}}>

                  <Image src={photoset.primary_photo_extras.url_m} />

                  <Box
                    position="absolute"
                    bottom="0px"
                    left="0px"
                    right="0px"
                    fontWeight="semibold"
                    fontSize="lg"
                    background="linear-gradient(rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 0.65) 50%, rgba(26, 32, 44, 0.8) 100%)"
                  >
                    <Text px={4} pt={6} pb={2} color="white">
                      {photoset.title._content}
                    </Text>
                  </Box>
                </PseudoBox>
              </NextLink>
            ))}
          </SimpleGrid>


          <Heading size="lg" pt={4} pb={2}>Recent Photos</Heading>
          <Gallery photos={galleryLinks()} direction="row" margin={4} renderImage={imageRenderer}/>

          <Button onClick={loadNextPhotos} display={loadMoreEnabled ? "block":"none"} mt={8} mb={2} mx="auto">Load More</Button>

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

export async function getStaticProps({ params }) {
  let title = "Photos"
  let photosets = []
  let photos = []
  let sizes = {}

  try {
    const photosetResponse = await flickr.photosets.getList({
      user_id: '58074610@N03',
      primary_photo_extras: 'url_m'
    })
    photosets = photosetResponse.body.photosets.photoset

    const streamResponse = await flickr.people.getPublicPhotos({
      user_id: '58074610@N03',
      primary_photo_extras: 'url_m'
    })

    photos = streamResponse.body.photos.photo
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
      photosets,
      photos,
      sizes
    }
  }
}

export default Photos
