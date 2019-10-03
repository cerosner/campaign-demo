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
      <VotingInfo />
      <hr />
      <Container />
      <hr />
      <PressReleases />
      <Contact />
      {/* <div id="quote">
      <h1>
        "Lorem ipsum dolor sit amet" - quote
      </h1>
      </div> */}
    </Layout>
  </div>
)

export default IndexPage
