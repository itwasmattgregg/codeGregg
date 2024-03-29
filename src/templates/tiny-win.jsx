import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';

import OpenGraph from '../utils/openGraph';
import TinyWinsLayout from '../components/tinywinsLayout/layout';
import Webmentions from '../components/Webmentions';

const Win = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  max-width: 700px;
  padding: 30px;
`;

export default function Template({ pageContext, data }) {
  const { body, title, date, excerpt } = pageContext;
  const { siteUrl } = data.site.siteMetadata;
  const { pathname } = useLocation();
  const url = `${siteUrl}${pathname}`;
  return (
    <TinyWinsLayout hideBackLink>
      <Helmet title={`TinyWins - ${title}`}>
        <meta name='description' content={`TinyWin: ${excerpt}`} />
        {date && (
          <meta
            property='article:published_time'
            content={new Date(date).toISOString()}
          />
        )}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={`${title} | CodeGregg TinyWins`} />
        <meta property='og:description' content={excerpt} />
        <meta
          property='og:image'
          content={OpenGraph.generateImageUrl(`**TinyWins:** ${title}`)}
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={url} />
        <meta
          property='twitter:title'
          content={`${title} | CodeGregg Tinywins`}
        />
        <meta property='twitter:description' content={excerpt} />
        <meta
          property='twitter:image'
          content={OpenGraph.generateImageUrl(title)}
        />
        <meta property='twitter:image:alt' content={`Tiny Win: ${title}`} />
      </Helmet>
      <Link to='/tinywins'>
        <strong>Tiny Wins Home</strong>
      </Link>
      <Win>
        <h1>{title}</h1>
        <p>{date}</p>
        <MDXRenderer>{body}</MDXRenderer>
        <Webmentions postUrl={url} />
      </Win>
    </TinyWinsLayout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
