import React from 'react';
import PropTypes from 'prop-types';

import {
  Snackbar,
  IconButton,
  Box,
  Icon,
  Typography,
  makeStyles,
} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

import {styles} from './styles/Snackbar';

const useStyles = makeStyles(styles);

const CustomSnackbar = (props) => {
  const {
    isOpen,
    variant,
    icon,
    text,
    autoHideDuration,
    handleClose,
  } = props;

  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={isOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Box ml={1}>
            <Icon>{icon}</Icon>
          </Box>
        </IconButton>,
      ]}
    >

      <Alert
        severity={variant}
        onClose={handleClose}
        className={classes.alert}
      >
        <Typography
          component="span"
          variant="h6"
        >
          {text}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

CustomSnackbar.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  variant: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  autoHideDuration: PropTypes.number,
  handleClose: PropTypes.func,
  icon: PropTypes.string,
};

CustomSnackbar.defaultProps = {
  isOpen: true,
  variant: 'info',
  autoHideDuration: 6000,
  handleClose: () => null,
  icon: 'clear',
};

export default CustomSnackbar;
