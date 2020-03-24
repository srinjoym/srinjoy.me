import React, {FunctionComponent} from 'react'

import { Image, Text, Box } from '@chakra-ui/core'
import { Button } from "../Utilities"

type CardProps = {
  className?: string
  title: string
  subtitle?: string
  imagePath?: string
  text?: string
}

const MyCard:FunctionComponent<CardProps> = ({className, title, subtitle, imagePath, text}) => (
  <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
    <Image src={imagePath} />

    <Box
      mt="1"
      fontWeight="semibold"
      as="h4"
      lineHeight="tight"
      isTruncated
    >
      <Text>
        {title}
      </Text>
    </Box>
    <Box>
      <Text>
        {subtitle}
      </Text>
    </Box>

    <Text>
      {text}
    </Text>
  </Box>
)

export default MyCard