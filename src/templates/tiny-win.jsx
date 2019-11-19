import React from 'react';
import { Helmet } from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default function Template({ pageContext }) {
  // const { markdownRemark: post } = data;
  const { body, title } = pageContext;
  return (
    <div className='blog-post-container'>
      <Helmet title={`Tinywins - ${title}`} />
      <div className='blog-post'>
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
  );
}
