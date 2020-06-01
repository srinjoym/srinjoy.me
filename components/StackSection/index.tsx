import React from 'react'
import SectionHeader from "../SectionHeader"
import Feature from '../Feature'
import { Stack, Box, Flex, Button } from '@chakra-ui/core'
import Container from "../Container"
import NextLink from "next/link"

const renderCards = (data) => {
  const cards = data.map(data => {
    return <Feature
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
    <Container>
      <Flex alignItems="center">
        {title &&
          <SectionHeader title={title} flexGrow={1}/>
        }

        {seeMoreLink &&
          <NextLink href={seeMoreLink}>
            <Button variant="ghost" rightIcon="arrow-forward">
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
