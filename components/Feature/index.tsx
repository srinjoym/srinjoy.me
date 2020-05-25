import React, {FunctionComponent} from 'react'

import { Image, Link, Box, PseudoBox, Heading, Text, Flex, useColorMode, Button } from '@chakra-ui/core'
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
      action: 'Research Link',
      label: title
    })
  }

  return (
    <PseudoBox
      borderWidth="1px"
      rounded="lg"
      mb={6}
      overflow="hidden"
      display="flex"
      flexDirection="row"
      alignItems="center"
      position="relative">

      <BackgroundImage display={{xs: "none", md: "flex"}} src={imagePath} mr={3} height="auto" maxW="30%" maxH="175px" w="auto"/>

      <Box p={4}>
        <Flex flexDirection="column" height="100%" alignItems="flex-start">
          <Heading as="h4" size="md" fontWeight="bold">
            {title}
          </Heading>

          <Flex>
            <Text py={2} display="flex" flexGrow={1}>
              {text}
            </Text>
          </Flex>
          { buttonData &&
            <Link href={buttonData.link} mt={2} _hover={{textDecoration: "none"}} onClick={trackEvent}>
              <Button aria-label="Link" rightIcon="external-link">{buttonData.label}</Button>
            </Link>
          }
        </Flex>
      </Box>
    </PseudoBox>
  )
}

export default MyCard