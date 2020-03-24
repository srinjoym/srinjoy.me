import React, {FunctionComponent} from 'react'

import { Image, Text, Box, Heading } from '@chakra-ui/core'

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
      pt={2}
      px={3}
      mt="1"
      fontWeight="semibold"
      as="h4"
      lineHeight="tight"
      isTruncated
    >
      <Heading size="md">
        {title}
      </Heading>
    </Box>
    <Box
      py={2}
      px={3}
    >
      <Heading size="sm">
        {subtitle}
      </Heading>
    </Box>
  </Box>
)

export default MyCard