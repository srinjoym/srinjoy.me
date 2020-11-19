import styled from "styled-components";
import { Box } from '@chakra-ui/react'

export const OffsetContainer = styled(Box)`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  overflow-wrap: break-word;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 960px) {
    width: 940px;
  }
  @media (min-width: 1200px) {
    width: ${props =>  props.wide && '1130px'};
  }
`
export default OffsetContainer