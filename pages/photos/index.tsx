import React from 'react'
import Container from '../../components/Container'
import { Box, Image, SimpleGrid, Text, PseudoBox, Heading } from '@chakra-ui/core'
import NextLink from 'next/link'
import Layout from '../../components/Layout';
var Flickr = require('flickr-sdk');
var flickr = new Flickr(process.env.FLICKR_API_KEY);

function Photosets({ photosets }){
  return(
    <Layout title="Photosets">
      <Container>
        <Heading mt={6}>Photosets</Heading>

        <SimpleGrid columns={{xs: 2, md:3}} spacing={{xs: 3, md: 5}} pt={6}>
          {photosets.map(photoset => (
            <NextLink key={photoset.id} href={`/photos/[slug]`} as={`/photos/${photoset.id}`}>
              <PseudoBox
                cursor="pointer"
                maxW="sm"
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
      </Container>
    </Layout>
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
