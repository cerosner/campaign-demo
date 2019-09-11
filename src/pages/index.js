import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import VotingInfo from '../components/voting-info'
import AboutMe from '../components/about-me'
import Issues from '../components/issues'
import PressReleases from '../components/press-releases'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <hr />
    <AboutMe />
    <hr />
    <Issues />
    <hr />
    <VotingInfo />
    <hr />
    <PressReleases />
    <hr />
    <Contact />
  </Layout>
)

export default IndexPage
