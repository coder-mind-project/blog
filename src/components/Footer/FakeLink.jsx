import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core';

import {styles} from './styles/Footer';

const useStyles = makeStyles(styles);

const FakeLink = (props) => {
  const {
    children,
    href,
    target,
    rel,
  } = props;

  const classes = useStyles();

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={classes.fakeLink}
    >
      {children}
    </a>);
};

FakeLink.propTypes =
    {
      children: PropTypes.node,
      href: PropTypes.string.isRequired,
      target: PropTypes.string,
      rel: PropTypes.string,
    };

FakeLink.defaultProps = {
  children: null,
  target: '_self',
  rel: null,
};

export default FakeLink;
