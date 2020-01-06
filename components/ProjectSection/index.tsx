import React from 'react'
import Hero from "../Hero"
import SectionHeader from "../SectionHeader"
import Card from '../Card'

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
    <div className="columns is-multiline">
      {cards}
    </div>
  )
}
const ProjectSection = () => (
  <div className="container">
    <SectionHeader title="Projects"/>

    { renderCards() }
  </div>
)

export default ProjectSection
