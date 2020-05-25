import React, {FunctionComponent} from 'react'

import { Image, Link, Box, PseudoBox, Heading, Text, Flex, useColorMode, Button } from '@chakra-ui/core'
import styled from '@emotion/styled'

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

  return (
    <PseudoBox
      borderWidth="1px"
      rounded="lg"
      mb={6}
      overflow="hidden"
      display="flex"
      flexDirection="row"
      alignItems="stretch"
      position="relative">

      <BackgroundImage src={imagePath} maxH="150px" mr={3} />
      <Box p={4}>
        <Flex flexDirection="column" height="100%">
          <Heading as="h4" size="md" fontWeight="bold">
            {title}
          </Heading>

          <Flex>
            <Text py={2} display="flex" flexGrow={1}>
              {text}
            </Text>
          </Flex>
          { buttonData &&
            <Link href={buttonData.link} mt={2}>
              <Button aria-label="Link">{buttonData.label}</Button>
            </Link>
          }
        </Flex>
      </Box>
    </PseudoBox>
  )
}

export default MyCard