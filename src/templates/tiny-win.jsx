import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TinyWinsLayout from '../pages/tinywins/layout';
import styled from '@emotion/styled';

const Win = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  max-width: 700px;
  padding: 30px;
`;

export default function Template({ pageContext }) {
  const { body, title, date } = pageContext;
  return (
    <TinyWinsLayout>
      <Helmet title={`Tinywins - ${title}`} />
      <Link to='/tinywins'>Back</Link>
      <Win>
        <h1>{title}</h1>
        <p>{date}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </Win>
    </TinyWinsLayout>
  );
}
