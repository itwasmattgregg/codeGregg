import React from 'react';
import { Helmet } from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TinyWinsLayout from '../pages/tinywins/layout';

export default function Template({ pageContext }) {
  const { body, title, date } = pageContext;
  return (
    <TinyWinsLayout>
      <Helmet title={`Tinywins - ${title}`} />
      <div className='blog-post'>
        <h1>{title}</h1>
        <p>{date}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </TinyWinsLayout>
  );
}
