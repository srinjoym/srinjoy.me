import React from 'react'
import SectionHeader from "../SectionHeader"
import Card from '../Card'
import { SimpleGrid, Box } from '@chakra-ui/core'
import projectData from '../../data/projects'
import Container from "../../components/Container"

const renderCards = () => {
  const cards = projectData.map(data => {
    return <Card
      className="column is-one-third"
      imagePath={'/img/' + data.image}
      title={data.title}
      subtitle={data.subtitle}
      text={data.text}
      />
  })

  return(
    <SimpleGrid
      columns={3}
      spacing={10}>
      {cards}
    </SimpleGrid>
  )
}
const ProjectSection = () => (
  <Box my={4}>
    <Container>
      <SectionHeader title="Projects"/>

      { renderCards() }
    </Container>
  </Box>
)

export default ProjectSection
