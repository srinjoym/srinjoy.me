import React, { useState } from 'react'
import { Image, Heading, PseudoBox, Button } from "@chakra-ui/core"
import NextLink from 'next/link'
import Container from "../../components/Container"
import Lightbox from 'react-image-lightbox'
import Gallery, { PhotoProps, RenderImageProps } from 'react-photo-gallery'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
var Flickr = require('flickr-sdk');
var flickr = new Flickr(process.env.FLICKR_API_KEY);

function Home({ title, photos, sizes }){
  const PAGE_SIZE = 20
  const thumbnailURLs = photos.map(photo => sizes[photo.id][6].source) // Small Square Size for Thumbnails
  const lightboxURLs = photos.map(photo => sizes[photo.id][11].source) // Large 2048 for preview

  const [loadMoreEnabled, setLoadMoreEnabled] = useState(thumbnailURLs.length > PAGE_SIZE)
  const [numShownPhotos, setNumShownPhotos] = useState(PAGE_SIZE)
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(-1);

  const openModal = (index) => {
    setCurrentPhoto(index);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const galleryLinks = ():PhotoProps[] => {
    const links = photos.slice(0, numShownPhotos).map(photo => ({
      src: sizes[photo.id][6].source,
      width: sizes[photo.id][6].width,
      height: sizes[photo.id][6].height
    }))

    return links
  }

  const loadNextPhotos = () => {
    if (numShownPhotos + PAGE_SIZE >= thumbnailURLs.length) {
      setLoadMoreEnabled(false);
    }

    setNumShownPhotos(Math.min(numShownPhotos+PAGE_SIZE, thumbnailURLs.length));
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
        <NextLink href="/photos">
          <Button mt={6} mb={2} leftIcon="chevron-left" size="sm">Back to Photos</Button>
        </NextLink>

        <Heading mb={6}>{title}</Heading>

        <Gallery photos={galleryLinks()} direction="row" margin={4} renderImage={imageRenderer}/>

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

        <Button onClick={loadNextPhotos} display={loadMoreEnabled ? "block":"none"} mt={8} mb={2} mx="auto">Load More</Button>
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
  let sizes = {}

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