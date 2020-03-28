import React, {useState} from 'react'
import ReactPlayer from 'react-player'

import { ResponsiveContainer } from './style'
import Container from '../Container'
import { Flex, Heading, Box, Text, Button } from '@chakra-ui/core'

const ResponsivePlayer = ({url, playing}) => (
  <ResponsiveContainer>
    <ReactPlayer
      className='react-player'
      playing={playing}
      url={url}
      width='100%'
      height='100%'
    />
  </ResponsiveContainer>
)

export default ResponsivePlayer
