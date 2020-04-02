import React from 'react'
import ReactPlayer from 'react-player'

import { ResponsiveContainer } from './style'

const ResponsivePlayer = ({url}) => (
  <ResponsiveContainer>
    <ReactPlayer
      className='react-player'
      url={url}
      width='100%'
      height='100%'
      light={true}
      playing={true}
    />
  </ResponsiveContainer>
)

export default ResponsivePlayer
