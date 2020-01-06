import React from 'react'
import Hero from "../components/Hero"
import Card from '../components/Card'
import CardCollectionSection from '../components/CardCollectionSection'
import Navigation from '../components/Navigation'
import ProjectSection from '../components/ProjectSection'


const Home = () => (
  <div>
    <Hero className="pt-12" />
    <CardCollectionSection />

    <ProjectSection />
  </div>
)

export default Home
