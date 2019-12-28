import React from 'react'
import {GradientBackground} from "./style"

class Hero extends React.Component {
  render () {
    return (
      <GradientBackground>
        <div className="container mx-auto py-20">
          <h1 className="text-5xl font-bold">Hi! I'm Srinjoy</h1>
          <h2 className="text-2xl">I'm a Software Engineer and Computer Vision Researcher</h2>
        </div>
      </GradientBackground>
    )
  }
}

export default Hero
