import React from 'react'
import Hero from "../Hero"
import SectionHeader from "../SectionHeader"
import Card from '../Card'
import { Grid } from '@theme-ui/components'
import projectData from '../../data/projects'

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
    <Grid
      gap={2}
      columns={[ 2, null, 3 ]}>
      {cards}
    </Grid>
  )
}
const ProjectSection = () => (
  <div className="container">
    <SectionHeader title="Projects"/>

    { renderCards() }
  </div>
)

export default ProjectSection
