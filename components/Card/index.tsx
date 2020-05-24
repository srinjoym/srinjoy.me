import React, {FunctionComponent} from 'react'

import { Image, Link, Box, PseudoBox, Heading, Text, Tooltip, Flex, useColorMode, IconButton } from '@chakra-ui/core'
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
      maxW="md"
      overflow="hidden"
      borderWidth="1px"
      rounded="lg"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      position="relative"
      _hover={{transition: "all .16s ease-in-out", transform: "scale(1.008)"}}>

      <BackgroundImage src={imagePath} maxH="250px" />
      <Box p={2} >
        <Flex flexDirection="column" height="100%">
          <Heading as="h4" size="md" fontWeight="bold">
            {title}
          </Heading>

          <Flex>
            <Text py={2} display="flex" flexGrow={1}>
              {text}
            </Text>

            { buttonData &&
              <Link href={buttonData.link} mt={2}>
                <Tooltip aria-label={buttonData.label} label={buttonData.label}>
                  <IconButton backgroundColor="transparent" aria-label="Link" icon="link" />
                </Tooltip>
              </Link>
            }
          </Flex>
        </Flex>
      </Box>
    </PseudoBox>
  )
}

export default MyCard