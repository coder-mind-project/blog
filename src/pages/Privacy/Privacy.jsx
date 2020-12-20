import React from 'react';
import {Box, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {Container} from '../styles';

import CustomDivider from '../../components/Divider';
import UsePolicy from './UsePolicy';
import PrivacyPolicy from './PrivacyPolicy';


const Privacity = () => {
  return (
    <Container item xs={12}>
      <UsePolicy />
      <CustomDivider my={3} />
      <PrivacyPolicy />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        my={5}
      >
        <Link to="/" className="fake-link">
          <Button
            color="primary"
            variant="contained"
          >
            <Typography variant="body1" component="span">
              Voltar a página principal
            </Typography>
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Privacity;
