import styled from "styled-components"
import { Heading } from "@chakra-ui/react"
import Babylon from "../Babylon"

export const GradientBackground = styled.div`
  /* background-image: linear-gradient(150deg, rgb(85, 51, 255) 15%, rgb(5, 213, 255) 70%, rgb(166, 255, 203) 94%); */
  background-image: linear-gradient(to right, #b92b27, #1565c0);
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:0;
`
export const AbsoluteBabylon = styled(Babylon)`
  position: absolute;
`