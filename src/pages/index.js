import React from 'react'

import SEO from '../components/seo'
import Header from '../components/header'
import Video from '../components/video'
import VotingInfo from '../components/voting-info'
import AboutMe from '../components/about-me'
import PressReleases from '../components/press-releases'
import Contact from '../components/contact'
import Footer from '../components/footer'

import mystyles from '../styles/index.scss'

const IndexPage = () => (
  <div id="index">
    <SEO title="Frank Rosner" />
    <Video />
    <Header />
    <VotingInfo />
    <AboutMe />
    <PressReleases />
    <hr />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
