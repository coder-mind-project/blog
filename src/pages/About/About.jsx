import React, {useState} from 'react';
import Photo from '../../assets/allan-wanderley.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPaperclip,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import {
  Box,
  TextField,
  Button,
  Icon,
  CircularProgress,
  Typography,
  Divider,
} from '@material-ui/core';

import CustomSnackbar from '../../components/Snackbar';
import Profile from './Profile';

import axios from 'axios';

import {Container} from '../styles';
import {Links, ButtonLink} from './styles';


const About = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showSuccessSend, setShowSuccessSend] = useState(false);
  const [showErrorSend, setShowErrorSend] = useState(false);

  const dismissSnackBar = () => {
    setShowErrorSend(false);
    setShowSuccessSend(false);
  };

  const resetForm = () => {
    setEmail('');
    setMessage('');
    dismissSnackBar();
  };

  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') {
      dismissSnackBar();
    }
  };

  const sendMessage = async (event) => {
    debugger;
    if (event) {
      event.preventDefault();
    }

    setIsSending(true);
    const url = `/contact`;

    await axios.post(url, {email, message}).then((res) => {
      resetForm();
      setShowSuccessSend(true);
    }).catch((error) => {
      const msg =
        error.response && error.response.data ?
            error.response.data :
            'Ops, ocorreu um erro desconhecido. Que tal tentar novamente?';

      setShowErrorSend(msg);
    });

    setIsSending(false);
  };

  return (
    <Container item xs={12}>
      <Typography component="h1" variant="h4">Sobre o projeto</Typography>
      <Box my={2}>
        <Divider />
      </Box>
      <Typography
        component="p"
        variant="body1"
      >
        Fala pessoal, beleza?
      </Typography>
      <Typography
        component="p"
        variant="body1"
      >
        Meu nome é Allan, tenho 23 anos, formado no bacharelado
        de Ciência da Computação na Instituição Carioca de Ensino
        Superior, Desenvolvedor de software e idealizador deste projeto.
        Sempre gostei de ensinar conhecimentos que julgo dominar e por
        vontade de colocar a mão na massa resolvi começar esse projeto.
      </Typography>
      <Typography
        component="p"
        variant="body1"
      >
        Não existe nada comercial por trás desta iniciativa e sim uma
        vontade de persistir um conteúdo bom e principalmente de graça!
      </Typography>
      <Typography
        component="p"
        variant="body1"
      >
        Fiquem a vontade para me conhecer ai embaixo e acima de tudo vamos
        trocar conhecimento, se você estar aqui então quer dizer que se
        minimamente se interessou. Então vamos lá, dê aquela força e compartilhe
        o material com quem possa estar precisando.
      </Typography>
      <Typography
        component="p"
        variant="body1"
      >
        Caso queira tirar dúvidas ou
        simplesmente trocar uma idéia basta entrar em contato pela plataforma
        que quiser, prometo que te respondo o mais rápido possível.
      </Typography>
      <Typography
        component="p"
        variant="body1"
      >
        Então é isso, forte abraço e espero que a experiência tenha sido
        excelente!
      </Typography>
      <Box my={5}>
        <Profile
          src={Photo}
          alt="Allan Wanderley"
          figcaption="Allan Wanderley - Idealizador do projeto"
        />
      </Box>
      <Links>
        <a href="#contact" className="fake-link">
          <ButtonLink color="primary" variant="contained">
            <Box mr={1}>
              <FontAwesomeIcon icon={faUserTie}/>
            </Box>
              Mande uma mensagem!
          </ButtonLink>
        </a>
        <a
          href="https://github.com/coder-mind-project"
          className="fake-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonLink color="primary" variant="contained">
            <Box mr={1}>
              <FontAwesomeIcon icon={faGithubAlt}/>
            </Box>
              Github
          </ButtonLink>
        </a>
        <a
          href="mailto://contato@codermind.com.br"
          className="fake-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonLink color="primary" variant="contained">
            <Box mr={1}>
              <FontAwesomeIcon icon={faEnvelope}/>
            </Box>
              E-mail
          </ButtonLink>
        </a>
      </Links>
      <Box mt={3} mb={1}>
        <Box display="flex" alignItems="center">
          <Box m={1}>
            <FontAwesomeIcon
              icon={faPaperclip}
              size="1x"
              color="#8a05be"
              id="contact"
              tabIndex="-1"
            />
          </Box>
          <Box m={1}>
            <Typography component="h2" variant="h4">
                Prefere falar conosco de outra forma?
            </Typography>
          </Box>
        </Box>
        <Typography component="p" variant="body1">
          Basta nos informar seu e-mail de contato e incluir sua mensagem.
        </Typography>
        <Typography component="p" variant="body1">
          Pode ficar tranquilo, qualquer tipo de dado fornecido
          a este site é 100% confidencial.
        </Typography>
        <form onSubmit={sendMessage} autoComplete="on">
          <Box mt={4}>
            <Box mb={2}>
              <TextField
                label="Informe seu e-mail"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </Box>
            <Box mb={5}>
              <TextField
                label="No que podemos ajudar?"
                variant="outlined"
                multiline
                rows={8}
                fullWidth
                value={message}
                onChange={(evt) => setMessage(evt.target.value)}
              />
            </Box>
            <Box mb={2}>
              <Button type="submit" color="primary" variant="contained">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mr={1}
                >
                  {isSending ?
                    <CircularProgress color="inherit" size={16} /> :
                    <Icon fontSize="small">send</Icon>
                  }
                </Box>
                <Typography component="span" variant="body1">
                  {isSending ? 'Enviando...' : 'Enviar'}
                </Typography>
              </Button>
            </Box>
          </Box>
        </form>
        <CustomSnackbar
          isOpen={Boolean(showSuccessSend)}
          handleClose={handleClose}
          variant="success"
          text={`
            Mensagem enviada com sucesso! Agora é com a gente,
            prometemos te responder rapidinho ;)
          `}
        />
        <CustomSnackbar
          isOpen={Boolean(showErrorSend)}
          handleClose={handleClose}
          variant="error"
          text={`
            Ocorreu um erro ao enviar a mensagem,
            tente novamente mais tarde
          `}
        />
      </Box>
    </Container>
  );
};

export default About;
