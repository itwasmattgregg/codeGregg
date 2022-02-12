const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel='webmention'
      href='https://webmention.io/codegregg.com/webmention'
    />,
    <link rel='pingback' href='https://webmention.io/codegregg.com/xmlrpc' />,
  ]);
};
