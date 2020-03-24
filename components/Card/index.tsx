import React, {FunctionComponent} from 'react'

import { Card, Image, Text, Box } from '@theme-ui/components'
import { Button } from "../Utilities"

type CardProps = {
  className?: string
  title: string
  subtitle?: string
  imagePath?: string
  text?: string
}

const MyCard:FunctionComponent<CardProps> = ({className, title, subtitle, imagePath, text}) => (
  // <div className={className}>
  //   <div className="card">
  //     <div className="card-image">
  //       <figure className="image">
  //         <img src={imagePath} alt="Placeholder image" />
  //       </figure>
  //     </div>
  //     <div className="card-content">
  //       <p className="is-size-4">
  //         {title}
  //       </p>
  //       <p className="is-size-5">
  //         {subtitle}
  //       </p>
  //       {text}
  //     </div>
  //   </div>
  // </div>

  <Box>
    <Card>
      <Image src={imagePath} />
      <Text sx={{
        fontSize: 4,
        fontWeight: 'bold',
      }}>
        {title}
      </Text>

      <Text sx={{
        fontSize: 4,
        fontWeight: 'semibold',
      }}>
        {subtitle}
      </Text>

      <Text>
        {text}
      </Text>
    </Card>
  </Box>
)

export default MyCard