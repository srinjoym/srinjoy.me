import React, {FunctionComponent} from 'react'

import { Button } from "../Utilities"

type CardProps = {
  className?: string
  title: string
  subtitle?: string
  imagePath?: string
  text?: string
}

const Card:FunctionComponent<CardProps> = ({className, title, subtitle, imagePath, text}) => (
  <div className={className}>
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={imagePath} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <p className="is-size-4">
          {title}
        </p>
        <p className="is-size-5">
          {subtitle}
        </p>
        {text}
      </div>
    </div>
  </div>
)

export default Card