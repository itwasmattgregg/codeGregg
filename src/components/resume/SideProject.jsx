import React from 'react';
import PropTypes from 'prop-types';

const SideProject = ({ demoLink, codeLink, description, title }) => {
  return (
    <section>
      <a href={demoLink} target='_blank' rel='noreferrer'>
        <header>{title}</header>
        {description}
      </a>
      {codeLink && (
        <a href={codeLink} target='_blank' rel='noreferrer'>
          code
        </a>
      )}
    </section>
  );
};

SideProject.propTypes = {
  demoLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SideProject;
