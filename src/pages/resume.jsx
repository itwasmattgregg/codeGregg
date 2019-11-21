import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout';
import Container from '../components/container';

class TechStack extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Layout>
        <Helmet title={`Resume | ${siteTitle}`} />
        <h1 className='text_center'>Resume</h1>
        <Container>
          <p>Resume Coming Soon</p>
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
