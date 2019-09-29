import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Container from '../components/container'
import VotingInfo from '../components/voting-info'
import PressReleases from '../components/press-releases'
import Contact from '../components/contact'

import mystyles from '../styles/index.scss'

const IndexPage = () => (
  <div id="index">
    <Layout>
      <SEO title="Home" />
      <hr />
      <Container />
      <hr />
      <VotingInfo />
      <hr />
      <PressReleases />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
