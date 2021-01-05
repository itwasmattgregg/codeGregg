import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout';
import Container from '../components/container';

class TechStack extends Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Layout>
        <Helmet title={`Tech Stack | ${siteTitle}`} />
        <h1 className={`text_center`}>Tech Stack</h1>
        <Container>
          <p>This is a place for my thoughts</p>
        </Container>
      </Layout>
    );
  }
}

export default TechStack;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
