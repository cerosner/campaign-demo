import React from 'react'

import headshot from '../images/headshot.jpg'
import facebook from '../images/facebook-logo.png'
import twitter from '../images/twitter-logo.png'
import instagram from '../images/instagram-logo.png'

const Header = () => (
  <header>
    <h1>Frank Rosner</h1>
    <h2>Candidate for Sixth Ward City Council</h2>
    <SubHeader />
    <Socials />
  </header>
)

const SubHeader = () => (
  <div id="sub-header">
    <img src={headshot} id="header-img" alt="Frank Rosner" />
    <p>
      There is no time like the present to bring positive change to Hoboken's 6th ward and the City.
      I am running for Hoboken's 6th Ward Council seat to unite a divided city.
      Together, we will make representation a core principal.
    </p>
  </div>
)

const Socials = () => (
  <div id="social-media">
    <h5 id="connect-with-me">Connect with me!</h5>
    <div id="social-media-links">
      <a href="https://www.facebook.com/FMROZforHoboken6thWard/" target="_blank">
        <img src={facebook} className="icon" alt="Facebook logo" />
        <br />
        <span>Facebook</span>
      </a>
      <a href="https://www.instagram.com/fmrosner/" target="_blank">
        <img src={instagram} className="icon" alt="Instagram logo" />
        <br />
        <span>Instagram</span>
      </a>
      <a href="https://twitter.com/rozone1" target="_blank">
        <img src={twitter} className="icon" alt="Twitter logo" />
        <br />
        <span>Twitter</span>
      </a>
    </div>
  </div>
)

export default Header
