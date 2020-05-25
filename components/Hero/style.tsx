import styled from "styled-components"
import { Heading } from "@chakra-ui/core"

export const GradientBackground = styled.div`
  background-image: linear-gradient(150deg, rgb(85, 51, 255) 15%, rgb(5, 213, 255) 70%, rgb(166, 255, 203) 94%);
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:0;
  /* color: white; */
`

export const GradientText = styled(Heading)`
  /* background: linear-gradient(45deg, rgb(85, 51, 255) 0%, rgb(5, 213, 255) 40%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`