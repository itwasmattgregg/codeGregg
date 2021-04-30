import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import TinyWinsLayout from '../../components/tinywinsLayout/layout';
import { Helmet } from 'react-helmet';

const List = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  max-width: 900px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0;
`;

const WinItem = styled(Link)`
  background: #fff;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  display: block;
  padding: 30px 30px 42px;
  position: relative;
  text-decoration: none;
  height: 100%;
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
      <Helmet title={`TinyWins`} />
      <h1>#TinyWins!</h1>
      <p>
        This is a little microsite for recording small personal wins of mine and
        also small learnings in web development as I go. Almost like a blog but
        smaller :)
      </p>
      <List>
        {wins.map(({ node }) => {
          const mdx = node.childMdx;
          return (
            <ListItem key={node.id}>
              <WinItem to={node.fields.slug}>
                <h3>{mdx.frontmatter.title}</h3>
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
