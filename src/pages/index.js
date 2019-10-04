import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import VotingInfo from '../components/voting-info'
import AboutMe from '../components/about-me'
import PressReleases from '../components/press-releases'
import Contact from '../components/contact'

import mystyles from '../styles/index.scss'

const IndexPage = () => (
  <div id="index">
    <Layout>
      <SEO title="Home" />
      <VotingInfo />
      <AboutMe />
      <PressReleases />
      <hr id="bottom-hr"/>
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
