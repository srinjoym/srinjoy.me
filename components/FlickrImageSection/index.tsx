import React, { useState } from 'react'
import SectionHeader from "../SectionHeader"
import { SimpleGrid, Box, Image, Flex, Button, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Container from "../Container"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const FlickrImageSection = ({photoURLs}) => {
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
    <Container>
      <Flex alignItems="center">
        <SectionHeader title="Recent Photos" flexGrow={1}/>
        <NextLink href="/photos">
          <Button variant="ghost" rightIcon={<ArrowForwardIcon />}>
            See More
          </Button>
        </NextLink>
      </Flex>

      <SimpleGrid columns={{base: 2, md:3}} spacing={{base: 3, md: 5}}>
        {photoURLs.map((url, index) => (
          <Link _hover={{transition: "all .2s ease-in-out", transform: "scale(1.01)"}} onClick={() => openModal(index)}>
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" borderStyle="solid" position="relative">
              <Image src={url} />
            </Box>
          </Link>
        ))}
      </SimpleGrid>

      {isOpen && (
        <Lightbox
          mainSrc={photoURLs[currentPhoto]}
          onCloseRequest={closeModal}
        />
      )}
    </Container>
  )
}

export default FlickrImageSection
