import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import TinyWinsLayout from './layout';

const ListItem = styled.li`
  list-style: none;
`;

const WinItem = styled(Link)`
  display: block;
  background: #fff;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  margin: 10px auto;
  max-width: 500px;
  padding: 30px 30px 42px;
  position: relative;
`;

const WinDate = styled.div`
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  color: #888;
`;

const TinyWinsHomepage = ({ data }) => {
  const wins = data.allFile.edges;
  return (
    <TinyWinsLayout>
      <h1>Tiny Wins!</h1>
      <ul>
        {wins.map(({ node }) => {
          const mdx = node.childMdx;
          return (
            <ListItem key={node.id}>
              <WinItem to={node.fields.slug}>
                {mdx.excerpt}
                <WinDate>{mdx.frontmatter.date}</WinDate>
              </WinItem>
            </ListItem>
          );
        })}
      </ul>
    </TinyWinsLayout>
  );
};

export default TinyWinsHomepage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      sort: { fields: [childMdx___frontmatter___date], order: DESC }
      filter: { sourceInstanceName: { eq: "tinywins" } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          childMdx {
            excerpt
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
            }
          }
        }
      }
    }
  }
`;
