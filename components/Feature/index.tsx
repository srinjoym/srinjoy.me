import React, {FunctionComponent} from 'react'
import { Image, Box, PseudoBox, Heading, Text, Flex, useColorMode, Button, FlexProps } from '@chakra-ui/core'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import ReactGA from 'react-ga'

const BackgroundImage = styled(Image)`
  object-fit: fill;
`

type ButtonData = {
  label: string,
  link: string,
  external?: boolean
}

type CardProps = {
  title: string
  desc: string
  link: string
  imageLink: string
  date: ButtonData
}

const MyCard:FunctionComponent<CardProps&FlexProps> = ({title, desc, link, imageLink, date, ...rest}) => {

  const trackEvent = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Link',
      label: title
    })
  }

  return (
    <Flex my={5} {...rest}>
      <Box flexGrow={1}>
        <NextLink href={link ?? ''}>
          <Heading cursor="pointer" fontSize={["sm", "md", "lg", "xl"]} onClick={trackEvent}>{title}</Heading>
        </NextLink>
        <Text mt={2} fontSize={["sm", "sm", "md", "md"]}>{desc}</Text>
        <Text mt={2} fontSize={["sm", "sm", "md", "md"]} color="gray.500">{date}</Text>
      </Box>

      <Image src={imageLink} rounded="lg" maxH={["50px", "70px", "70px", "100px"]} maxW={["50px", "70px", "70px", "100px"]} ml={2}/>
    </Flex>
  )
}

export default MyCard