import React from 'react'

import facebook from '../images/facebook-logo.png'
import twitter from '../images/twitter-logo.png'
import  instagram from '../images/instagram-logo.png'

const Socials = () => (
  <div id="social-media">
    <h5>Connect with me!</h5>
    <div id="social-links">
    <a href="https://www.facebook.com/FMROZforHoboken6thWard/" target="_blank">
      <img src={facebook} className="icon-header" alt="Facebook" /><br />
      <strong>Facebook</strong>
    </a>
    <a href="https://www.instagram.com/fmrosner/" target="_blank">
      <img src={instagram} className="icon-header" alt="Instagram" /><br />
      <strong>Instagram</strong>
    </a>
    <a href="https://twitter.com/rozone1" target="_blank">
      <img src={twitter} className="icon-header" alt="Twitter" /><br />
      <strong>Twitter</strong>
    </a>
    </div>
  </div>
)

export default Socials