import React from 'react';
import PropTypes from 'prop-types';
import {Slide, Icon, useScrollTrigger} from '@material-ui/core';

import {CustomFloatingButton} from './styles';

const FloatingButton = (props) => {
  const {window, action, icon} = props;

  const trigger = useScrollTrigger(
      {
        target: window ? window() : undefined,
        disableHysteresis: true,
      },
  );

  return trigger ? (
        <Slide direction="up" in mountOnEnter unmountOnExit>
          <CustomFloatingButton onClick={action}>
            <Icon>{icon || 'keyboard_arrow_up'}</Icon>
          </CustomFloatingButton>
        </Slide>
    ) : null;
};

FloatingButton.propTypes = {
  window: PropTypes.node,
  action: PropTypes.func,
  icon: PropTypes.string,
};

FloatingButton.defaultProps = {
  window: null,
  action: () => null,
  icon: '',
};

export default FloatingButton;
