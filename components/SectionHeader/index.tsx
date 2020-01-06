import React, {FunctionComponent} from 'react'

import { Button } from "../Utilities"

type SectionHeaderProps = {
  title: String
}

const SectionHeader:FunctionComponent<SectionHeaderProps> = ({title}) => (
  <div className="container p-t-4 p-b-4">
    <div className="columns">
      <h1 className="title is-left column">{title}</h1>

      <a className="is-right column is-narrow" href="">See More</a>
    </div>
  </div>
)

export default SectionHeader