import React, {FunctionComponent} from 'react'

import { Image, Link, Box, Heading, Text, Button } from '@chakra-ui/core'
import styled from '@emotion/styled'

type CardProps = {
  className?: string
  title: string
  subtitle?: string
  imagePath?: string
  text?: string
  link?: string
}

const OverlayContainer = styled.div`
  position: relative;

  :hover {
    /* transition: all .2s ease-in-out;
    transform: scale(1.01); */

    .overlay {
      height: 100%;
    }
  }

  .overlay {
    position: absolute;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    height: 0px;
    z-index: 10;
    transition: .35s ease;
    background-color: rgba(0, 0, 0, .15);
    backdrop-filter: blur(100px);
  }
`

const MyCard:FunctionComponent<CardProps> = ({className, title, subtitle, imagePath, link, text}) => {
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <OverlayContainer>
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

        <Box className='overlay' rounded="lg" overflow="hidden" pt={2} px={3}>
          <Heading size="md">
            {title}
          </Heading>

          <Text py={2}>
            {text}
          </Text>

          { link &&
            <Link href={link}>
              <Button variantColor="blue">Learn More</Button>
            </Link>
          }
        </Box>
      </OverlayContainer>
    </Box>
  )
}

export default MyCard