import React from 'react'
import SectionHeader from "../SectionHeader"
import Feature from '../Feature'
import { Stack, Box, Flex, Button, Container } from '@chakra-ui/react'
import NextLink from "next/link"
import { ArrowForwardIcon } from '@chakra-ui/icons'

const renderCards = (data) => {
  const cards = data.map(data => {
    return <Feature
      key={data.title}
      imageLink={data.image}
      title={data.title}
      desc={data.text}
      link={data.link}
      isExternal={data.isExternal ?? false}
      date={data.published}
      />
  })

  return(
    <Stack>
      {cards}
    </Stack>
  )
}

const StackSection = ({data, title=null, seeMoreLink=null, ...rest}) => (
  <Box py={4} {...rest}>
    <Container maxW="container.md">
      <Flex alignItems="center">
        {title &&
          <SectionHeader title={title} flexGrow={1} mb={6}/>
        }

        {seeMoreLink &&
          <NextLink href={seeMoreLink}>
            <Button variant="ghost" rightIcon={<ArrowForwardIcon />}>
              See More
            </Button>
          </NextLink>
        }
      </Flex>

      { renderCards(data) }
    </Container>
  </Box>
)

export default StackSection
