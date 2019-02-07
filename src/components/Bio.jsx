import React from 'react';

import twitter from '../images/twitter.svg';

const Bio = () => (
  <div>
    <p>
      Written by <strong>Matt Gregg</strong> who lives and works in Minneapolis,
      MN
    </p>
    <p>
      Have something to say about this post? Reach out to me on{' '}
      <a href="#" style={{ margin: '0 10px' }}>
        <img src={twitter} alt="twitter" />
      </a>
    </p>
  </div>
);

export default Bio;
