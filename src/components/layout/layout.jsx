import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import '../../scss/main.scss';

import styles from './layout.module.scss';
import Footer from '../footer';

const Layout = ({ children, paddingTop }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.appLayout}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <div
          className={`${styles.appContainer} ${
            paddingTop ? styles.appContainer_paddingTop : ''
          }`}
        >
          {children}
        </div>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  paddingTop: PropTypes.bool,
};

Layout.defaultProps = {
  paddingTop: true,
};

export default Layout;
