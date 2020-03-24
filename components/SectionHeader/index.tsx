import React, {FunctionComponent} from 'react'

import { Heading } from '@chakra-ui/core'

type SectionHeaderProps = {
  title: String
}

const SectionHeader:FunctionComponent<SectionHeaderProps> = ({title}) => (
    <Heading size="xl" my={4}>
      {title}
    </Heading>
)

export default SectionHeader