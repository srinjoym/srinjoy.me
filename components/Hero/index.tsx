import React, {FunctionComponent} from 'react'
import {GradientBackground} from "./style"
import { Button } from '../Utilities'
import { Heading } from "@theme-ui/components"
type HeroProps = {
  className?:string
}

const Hero:FunctionComponent<HeroProps> = ({className}) => (
  <GradientBackground>
    <section className="hero py-5">
      <div className="hero-body">
        <div className="container">
          <Heading>
            Hi! I'm Srinjoy
          </Heading>
          <h2 className="subtitle has-text-white">
          I'm a Software Engineer and Computer Vision Researcher
          </h2>
        </div>
      </div>
    </section>
  </GradientBackground>
)

export default Hero
