import React, {FunctionComponent} from 'react'

import { Image, Link, Box, Heading, Text, Flex, useColorMode, Icon, PseudoBox } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'
import NextLink from 'next/link'

const BackgroundImage = styled(Image)`
  object-fit: cover;
`

type ButtonData = {
  label: string,
  link: string,
  external?: boolean
}

type CardProps = {
  className?: string
  title: string
  subtitle?: string
  imagePath?: string
  text?: string
  buttonData?: ButtonData
}

const MyCard:FunctionComponent<CardProps> = ({className, title, subtitle, imagePath, buttonData, text}) => {
  const {colorMode, toggleColorMode} = useColorMode();

  const trackEvent = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Learn More',
      label: title
    })
  }

  return (
    <NextLink href={buttonData.link}>
      <PseudoBox
        onClick={trackEvent}
        maxW="md"
        overflow="hidden"
        borderWidth="1px"
        rounded="lg"
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        position="relative"
        transition="all .25s ease-in-out"
        cursor="pointer"
        _hover={{transform: "scale(1.016)", textDecoration: "none"}}>

        <BackgroundImage src={imagePath} maxH="250px" />
        <Box p={2} >
          <Flex flexDirection="column" height="100%">
            <Flex alignItems="center">
              <Heading as="h4" size="md" fontWeight="bold" display="flex" flexGrow={1}>
                {title}
              </Heading>

              {buttonData.external &&
                <Icon name="external-link" mx={2}/>
              }
            </Flex>

            <Text py={2}>
              {text}
            </Text>
          </Flex>
        </Box>
      </PseudoBox>
    </NextLink>
  )
}

export default MyCard