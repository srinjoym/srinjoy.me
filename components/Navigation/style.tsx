import styled from "styled-components"
import { Box } from '@chakra-ui/core'

export const FrostedContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(8px);
  z-index: 100;
`
