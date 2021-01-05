import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import TinyWinsLayout from '../../components/tinywinsLayout/layout';
import { Helmet } from 'react-helmet';

const List = styled.ul`
  margin: 0 10px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const WinItem = styled(Link)`
  background: #fff;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  display: block;
  margin: 10px auto;
  max-width: 500px;
  padding: 30px 30px 42px;
  position: relative;
  text-decoration: none;
`;

const WinDate = styled.div`
  bottom: 3px;
  color: #888;
  font-size: 12px;
  font-weight: 600;
  left: 50%;
  position: absolute;
  text-transform: uppercase;
  transform: translateX(-50%);
`;

const TinyWinsHomepage = ({ data }) => {
  const wins = data.allFile.edges;
  return (
    <TinyWinsLayout>
      <Helmet title={`Tinywins`} />
      <h1>#TinyWins!</h1>
      <List>
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
      </List>
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
