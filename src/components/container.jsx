import React from 'react';

const Container = ({ children }) => (
  <div
    style={{
      maxWidth: '1080px',
      padding: '0px 1.0875rem',
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);

export default Container;
