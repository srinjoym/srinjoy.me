import React, {FunctionComponent} from 'react'

import { Heading, HeadingProps } from '@chakra-ui/core'

type SectionHeaderProps = {
  title: String
}

const SectionHeader:FunctionComponent<SectionHeaderProps&HeadingProps> = ({title, ...rest}) => (
    <Heading size="xl" my={4} {...rest}>
      {title}
    </Heading>
)

export default SectionHeader