import React, {FunctionComponent} from 'react'
import { OffsetContainer } from "./style"

type HeroProps = {
  className?:string
}

const PageContainer:FunctionComponent<HeroProps> = ({className, children}) => (
  <OffsetContainer className={className}>
    {children}
  </OffsetContainer>
)

export default PageContainer