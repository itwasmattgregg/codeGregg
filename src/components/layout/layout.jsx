import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import '../../scss/main.scss';

import styles from './layout.module.scss';
import Footer from '../footer';

const Layout = ({ children }) => (
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
        <Helmet defer={false}>
          <html lang='en' />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name='description'
            content='Minneapolis-based UI engineer and many-stack, artisinal crafter of the internet.'
          />
          <meta
            name='keywords'
            content='front end, developer, minneapolis, UX, UI'
          />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://codegregg.com' />
          <meta
            property='og:title'
            content='codeGregg: Minneapolis Web UI Developer'
          />
          <meta
            property='og:description'
            content='Minneapolis-based UI engineer and many-stack, artisinal crafter of the internet.'
          />
          <meta
            property='og:image'
            content='https://codegregg.com/images/codegregg.png'
          />

          {/* <!-- Twitter --> */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://codegregg.com' />
          <meta
            property='twitter:title'
            content='codeGregg: Minneapolis Web UI Developer'
          />
          <meta
            property='twitter:description'
            content='Minneapolis-based UI engineer and many-stack, artisinal crafter of the internet.'
          />
          <meta
            property='twitter:image'
            content='https://codegregg.com/images/codegregg.png'
          />
          <link rel="webmention" href="https://webmention.io/codegregg.com/webmention" />
          <link rel="pingback" href="https://webmention.io/codegregg.com/xmlrpc" />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <div className={styles.appContainer}>{children}</div>
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
