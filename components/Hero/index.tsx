import React, {FunctionComponent} from 'react'
import {GradientBackground} from "./style"
import { Button } from '../Utilities'

type HeroProps = {
  className?:string
}

const Hero:FunctionComponent<HeroProps> = ({className}) => (
  <GradientBackground>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Hi! I'm Srinjoy
          </h1>
          <h2 className="subtitle">
          I'm a Software Engineer and Computer Vision Researcher
          </h2>
        </div>
      </div>
    </section>
  </GradientBackground>
)

export default Hero
