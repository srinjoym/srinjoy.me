import React from 'react'
import Hero from "../Hero"
import SectionHeader from "../SectionHeader"
import Card from '../Card'

const renderCards = () => {
  const cards = []

  for (let i=0; i < 3; i++) {
    cards.push(<Card className="column is-one-third" title="" imagePath=""/>)
  }

  return(
    <div className="columns is-multiline">
      {cards}
    </div>
  )
}
const CardCollectionSection = () => (
  <div className="container">
    <SectionHeader title="Blog Posts"/>

    { renderCards() }
  </div>
)

export default CardCollectionSection
