import React from 'react'
import Container from '../../components/Container'
import { Box, Image, SimpleGrid, Link, PseudoBox } from '@chakra-ui/core'
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import NextLink from 'next/link'
var Flickr = require('flickr-sdk');
var flickr = new Flickr(process.env.FLICKR_API_KEY);

function Photosets({ photosets }){
  return(
    <div>
      <Navigation />
      <Container>
        <SimpleGrid columns={{sm: 2, md:3}} spacing={10} pt={6}>
          {photosets.map(photoset => (
            <NextLink key={photoset.id} href={`/photos/[slug]`} as={`/photos/${photoset.id}`}>
              <PseudoBox
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                position="relative"
                _hover={{transition: "all .2s ease-in-out", transform: "scale(1.01)"}}>

                <Image src={photoset.primary_photo_extras.url_m} />

                <Box
                  position="absolute"
                  bottom="5px"
                  left="10px"
                  color="white"
                  fontWeight="semibold"
                >
                  {photoset.title._content}
                </Box>
              </PseudoBox>
            </NextLink>
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
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
      user_id: '58074610@N03',
      primary_photo_extras: 'url_m'
    })
    photosets = res.body.photosets.photoset
  } catch(err) {
    console.error('bonk', err);
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      photosets
    }
  }
}

export default Photosets
