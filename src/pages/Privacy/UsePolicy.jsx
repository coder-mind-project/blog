import React from 'react';
import {Typography, Box, Divider} from '@material-ui/core';

const UsePolicy = () => (
  <Box>
    <Typography component="h1" variant="h4">Políticas de uso</Typography>
    <Box my={2}>
      <Divider />
    </Box>
    <Typography
      component="p"
      variant="body1"
    >
      Este material é escrito e revisto pelo seus autores.
      Todo material de estudo e projetos apresentados serão de
      100% (cem por cento) autoral do respectivo autor, caso acredite
      estar consumindo um trabalho de terceiros certifique-se de o autor
      mencionar o autor original do conteúdo.
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      Em caso de reinvidicação, fique a vontade para entrar em contato
      com o autor da publicação ou nos
      envie uma mensagem clicando <a href="/sobre#contact">aqui</a>.
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      Nosso material é 100% gratuíto para o leitor,
      não será necessário criar contas ou fornecer
      informações para consumir nosso material.
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      Para efeitos comerciais, academicos, profissionais
      ou quaisquer outros é gratuíto, desde que seja feita
      a devida menção ao nosso trabalho, esta pode ser feita
      de diversas formas. Desde compartilhando nossa
      plataforma em um final de material, ou realizando menções durante.
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      Para efeitos comerciais, academicos, profissionais
      ou outros quaisquer é gratuíto, desde que seja feita
      a devida menção ao nosso trabalho, esta pode ser feita
      de diversas formas. Desde compartilhando nossa
      plataforma em um final de material, ou realizando menções.
    </Typography>
    <Typography
      component="p"
      variant="body1"
    >
      Para melhor compreenção podemos citar 2 (duas) ocasiões:
    </Typography>
    <ul>
      <li>
        <Typography
          component="p"
          variant="body1"
        >
          Vídeos na web onde foi usado o nosso material
          - Deverá ser mencionado em qualquer momento na
          gravação do vídeo que o material de base que se
          permitiu a gravação do vídeo foi retirado em nosso site,
          indicando ao espectador que possa visitar para
          visualizar mais postagens.
        </Typography>
      </li>
      <li>
        <Typography
          component="p"
          variant="body1"
        >
          Trabalhos escolares ou acadêmicos - Deverá ser colocado na parte
          de <strong>Referências Bibliográficas</strong> indicando ao
          docente que o material de estudo foi retirado
          integralmente ou parcialmente de nossos artigos.
        </Typography>
      </li>
    </ul>
    <Typography
      component="p"
      variant="body1"
    >
      Contamos com a colaboração de todos para se seguir criteriosamente
      essas regras.
      Ajudando todos que queiram, logo é extremamente razoável que
      ocorra as devidas referências, não ganhamos nada com a criação
      do material e sustentação da plataforma.
    </Typography>
  </Box>
);

export default UsePolicy;
