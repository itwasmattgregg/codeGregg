import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/react';
import { useTheme } from '@emotion/react';

import Header from '../header/header';
import '../../scss/main.scss';

import * as styles from './layout.module.scss';
import Footer from '../footer';

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={styles.appLayout}>
          <Helmet>
            <html lang='en' />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name='description'
              content={data.site.siteMetadata.description}
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
              content='codeGregg: Minneapolis Web Developer'
            />
            <meta
              property='og:description'
              content='Minneapolis-based UI engineer and many-stack, artisinal crafter of the internet.'
            />
            <meta
              property='og:image'
              content='https://codegregg.com/images/codegregg-social.png'
            />

            {/* <!-- Twitter --> */}
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content='https://codegregg.com' />
            <meta
              property='twitter:title'
              content='codeGregg: Minneapolis Web Developer'
            />
            <meta
              property='twitter:description'
              content='Minneapolis-based UI engineer and many-stack, artisinal crafter of the internet.'
            />
            <meta
              property='twitter:image'
              content='https://codegregg.com/images/codegregg-social.png'
            />
          </Helmet>
          <Header
            siteTitle={data.site.siteMetadata.title}
            menuLinks={data.site.siteMetadata.menuLinks}
          />
          <Global
            styles={css`
              a {
                color: ${theme.theme === 'dark' && theme.text};
              }
            `}
          />
          <div
            className={styles.appContainer}
            style={{ color: theme.text, backgroundColor: theme.background }}
          >
            {children}
          </div>
          <Footer />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  paddingTop: PropTypes.bool,
};

Layout.defaultProps = {
  paddingTop: true,
};

export default Layout;
