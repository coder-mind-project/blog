import React from 'react';

import {Box, Typography} from '@material-ui/core';

const PrivacyPolicy = () => (
  <Box>
    <Typography component="h1" variant="h4">
        Politicas de privacidade
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      Fornecendo informações você está assumindo que confia plenamente
      em nossa plataforma para manter seus dados seguros. Todo tipo de
      informação de caráter privado não será divulgado por nós.
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      Ao fornecer as informações para comentar em nossas postagens,
      está assumido que <strong>seu e-mail não será publico</strong>.
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      Somente o autor do artigo ao qual foi comentado
      poderá ver esta informação o mesmo não possui permissões
      para divulgar ou utilizar-se a benefício próprio de informações
      privadas, dados
      como <strong>nome</strong> e <strong>mensagem</strong> possuem
      caráter público.
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      Ao realizar comentários, caso nosso site reconhecê-lo automáticamente,
      isto é, não precisar colocar informações como nome e e-mail.
      Significa que temos uma funcionalidade para deixá-lo com maior comodidade,
      assim, não criamos um perfil com base nessas informações.
      Esses dados permanescem em seu navegador.
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      <strong>
        Ao utilizar nosso site você está de acordo com as
        políticas de uso e privacidade.
      </strong>
    </Typography>
  </Box>
);

export default PrivacyPolicy;
