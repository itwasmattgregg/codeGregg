import React from 'react';

const Container = ({ children, className }) => (
  <div
    className={className}
    style={{
      maxWidth: '1080px',
      padding: '0px 1.0875rem',
      margin: '0 auto',
      position: 'relative',
    }}
  >
    {children}
  </div>
);

export default Container;
