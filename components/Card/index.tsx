import React, {FunctionComponent} from 'react'

import { Image, Link, Box, PseudoBox, Heading, Text, Tooltip, Flex, useColorMode, IconButton } from '@chakra-ui/core'
import styled from '@emotion/styled'

const BackgroundImage = styled(Image)`
  object-fit: cover;
`

const CardTextContainer = styled(Box)`
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
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
    <PseudoBox maxW="md" borderWidth="1px" rounded="lg" overflow="hidden" display="flex" flexDirection="column" alignItems="stretch" position="relative" _hover={{transition: "all .25s ease-in-out", transform: "scale(1.015)"}}>
      <BackgroundImage src={imagePath} maxH="300px" />

      <CardTextContainer p={2}>
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
      </CardTextContainer>
    </PseudoBox>
  )
}

export default MyCard