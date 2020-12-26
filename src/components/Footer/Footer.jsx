import React from 'react';
import {Grid, Box, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import {fakeLink} from './styles/Footer';
import FakeLink from './FakeLink';

import {
  FooterContainer,
  FooterIconArea,
  FooterIconDescription,
  FooterIcon,
  FooterBox,
  FooterFakeLink,
} from '../styles';

const Footer = () => {
  return (
    <Grid item xs={12}>
      <FooterContainer component="footer">
        <Box
          display="flex"
          justifyContent="between"
          flexWrap="wrap"
          alignItems="center"
          width="100%"
        >
          <FooterBox disablemargin="true">
            <FooterIconArea>
              <FooterIcon>code</FooterIcon>
              <Typography className="codermind">
                Coder Mind
              </Typography>
            </FooterIconArea>
            <FooterIconDescription>
              <Typography align="center">
                &copy; {new Date().getFullYear()}
              </Typography>
            </FooterIconDescription>
          </FooterBox>
          <FooterBox>
            <FakeLink href="https://github.com/coder-mind-project" target="_blank" rel="noopener noreferrer" styles={fakeLink}>
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </FakeLink>
            <FooterFakeLink to="/privacidade">
              <Typography component="span" variant="body1">
                Políticas de Uso
              </Typography>
            </FooterFakeLink>
            <FooterFakeLink to="/sobre"> Sobre </FooterFakeLink>
          </FooterBox>
        </Box>
      </FooterContainer>
    </Grid>
  );
};

export default Footer;
