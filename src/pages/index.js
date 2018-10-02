import React from 'react'
import Img from "gatsby-image"

import Layout from '../components/layout/layout'
import FeatureBox from '../components/featureBox/featureBox'


const IndexPage = ({data}) => (
  <Layout>
    <div style={{
      display: 'flex',
    }}>
      <FeatureBox side="left" backgroundColor="darkBlue">
        Test Profile
        <Img fixed={data.file.childImageSharp.fixed} />
      </FeatureBox>
      <FeatureBox side="right" backgroundColor="lightBlue">Test Latest Blog</FeatureBox>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "Matt-Gregg-square-9961.jpg" }) {
      childImageSharp {
        fixed(
          width: 132,
          height: 132,
          traceSVG: {
            color: "white"
            turnPolicy: TURNPOLICY_MINORITY
            blackOnWhite: false
          }
        ) {
          src
          srcSet
          tracedSVG
          width
          height
        }
      }
    }
  }
`
