import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const {src, alt, figcaption} = props;
  return (
    <figure
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={src} alt={alt} height="150" />
      <figcaption style={{marginTop: 10}}>{figcaption}</figcaption>
    </figure>
  );
};

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  figcaption: PropTypes.string.isRequired,
};

export default Profile;
