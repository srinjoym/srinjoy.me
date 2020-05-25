import React from 'react'
import SectionHeader from "../SectionHeader"
import Feature from '../Feature'
import { Stack, Box } from '@chakra-ui/core'
import Container from "../Container"

const renderCards = (data) => {
  const cards = data.map(data => {
    return <Feature
      className="column is-one-third"
      imagePath={'/img/' + data.image}
      title={data.title}
      subtitle={data.subtitle}
      text={data.text}
      buttonData={data.buttonData}
      />
  })

  return(
    <Stack>
      {cards}
    </Stack>
  )
}

const StackSection = ({title, data}) => (
  <Box pt={8} py={4}>
    <Container>
      <SectionHeader title={title}/>

      { renderCards(data) }
    </Container>
  </Box>
)

export default StackSection
