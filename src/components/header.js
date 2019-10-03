import React from 'react'
import { Link } from 'gatsby'

import SubHeader from './sub-header'
import Socials from './socials'

const Header = () => (
  <header>
    <Link to="/">
      <strong>
      <h1>Frank Rosner</h1>
      <h2>Candidate for Sixth Ward City Council</h2>
      </strong>
    </Link>
    <SubHeader />
    <Socials />
  </header>
)

export default Header
