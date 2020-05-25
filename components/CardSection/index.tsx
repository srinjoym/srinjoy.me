import React from 'react'
import SectionHeader from "../SectionHeader"
import Card from '../Card'
import { SimpleGrid, Box } from '@chakra-ui/core'
import Container from "../Container"

const renderCards = (data) => {
  const cards = data.map(data => {
    return <Card
      className="column is-one-third"
      imagePath={'/img/' + data.image}
      title={data.title}
      subtitle={data.subtitle}
      text={data.text}
      buttonData={data.buttonData}
      />
  })

  return(
    <SimpleGrid
      columns={{xs: 1, md:2,lg:3}}
      spacing={10}>
      {cards}
    </SimpleGrid>
  )
}

const CardSection = ({title, data}) => (
  <Box pt={8} py={4}>
    <Container>
      <SectionHeader title={title}/>

      { renderCards(data) }
    </Container>
  </Box>
)

export default CardSection
