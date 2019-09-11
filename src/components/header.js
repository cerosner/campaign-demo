import React from 'react'
import { Link } from 'gatsby'

import SubHeader from './sub-header'

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <h1>Frank Rosner</h1>
        <h2>Candidate for Sixth Ward City Council</h2>
      </Link>
      <SubHeader />
    </div>
  </header>
)

export default Header
