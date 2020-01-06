import React, {useState} from 'react'
import Link from 'next/link'

import { FrostedContainer } from './style'
import { FaBars } from 'react-icons/fa'

const Navigation = () => {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <FrostedContainer>
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              Srinjoy Majumdar
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <Link href="/">
                <a className="navbar-item">Home</a>
              </Link>
              <Link href="/about">
                <a className="navbar-item">About</a>
              </Link>
              <Link href="/blog">
                <a className="navbar-item">Blog</a>
              </Link>
            </div>
          </div>
        </nav>
      </div>

    </FrostedContainer>
  )
}

export default Navigation
