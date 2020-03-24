import React from 'react'
import Hero from "../Hero"
import SectionHeader from "../SectionHeader"
import Card from '../Card'
import { Grid, Box } from '@theme-ui/components'

const renderCards = () => {
  const cards = []

  for (let i=0; i < 3; i++) {
    cards.push(<Card className="column is-one-third" title="" imagePath=""/>)
  }

  return(
    <Grid
      gap={2}
      columns={[ 2, null, 3 ]}>
      {cards}
    </Grid>
  )
}
const CardCollectionSection = () => (
  <div className="container">
    <SectionHeader title="Blog Posts"/>

    { renderCards() }
  </div>
)

export default CardCollectionSection
