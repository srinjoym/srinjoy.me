import React from 'react'
import SectionHeader from "../SectionHeader"
import { SimpleGrid, Box, Link, Image, Flex, Button } from '@chakra-ui/core'
import Container from "../Container"

const imageURL = (photo, size="z") => {
  if (photo == null)
    return;
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
}

const FlickrImageSection = ({photos}) => (
  <Container>
    <Flex alignItems="center">
      <SectionHeader title="Recent Photos" flexGrow={1}/>
      <Link href="/photos" _hover={{textDecoration: "none"}}>
        <Button variant="ghost" rightIcon="arrow-forward">
          See More
        </Button>
      </Link>
    </Flex>

    <SimpleGrid columns={{sm: 2, md:3}} spacing={10} pt={6}>
      {photos.map((photo, index) => (
        <Link _hover={{transition: "all .2s ease-in-out", transform: "scale(1.01)"}}>
          <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" borderStyle="solid" position="relative">
            <Image src={imageURL(photo)} />
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  </Container>
)

export default FlickrImageSection
