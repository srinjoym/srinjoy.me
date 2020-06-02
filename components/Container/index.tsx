import styled from "styled-components";
import { Box } from '@chakra-ui/core'

export const OffsetContainer = styled(Box)`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 960px) {
    width: 940px;
  }
`
export default OffsetContainer