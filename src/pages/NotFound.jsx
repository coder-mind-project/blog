import React from 'react';
import {
  Box,
  Button,
  Typography,
} from '@material-ui/core';

import {Link} from 'react-router-dom';

import {
  NotFoundContainer,
  NotFoundIcon,
  NotFoundContent,
} from './styles';

const NotFound = () => {
  return (
    <NotFoundContainer item xs={12}>
      <NotFoundContent>
        <Box m={2}>
          <NotFoundIcon color="primary" fontSize="large">
            warning
          </NotFoundIcon>
        </Box>
        <Box>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
                Ops! Página não encontrada
          </Typography>
          <Typography component="p" variant="body1" align="center">
                Tenha certeza que informou o link corretamente,
                caso você tenha sido redirecionado
                a esta página sem ter alterado o link,
                pode entrar em contato
                clicando <a href="/sobre#contact"> aqui </a>
          </Typography>
        </Box>
      </NotFoundContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        mt={5}
        mb={5}
      >
        <Link to="/" className="fake-link">
          <Button
            color="primary"
            variant="contained"
          >
            Voltar a página principal
          </Button>
        </Link>
      </Box>
    </NotFoundContainer>
  );
};

export default NotFound;
