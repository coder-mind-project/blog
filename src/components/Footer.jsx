import React from 'react';
import {Grid, Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import {styles} from './styles/Footer';
import {
  FooterContainer,
  FooterIconArea,
  FooterIconDescription,
  FooterIcon,
  FooterBox,
} from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();

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
            <a href="https://github.com/coder-mind-project" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <Link to="/privacidade" className={classes.fakeLink}>
              <Typography component="span" variant="body1">
                Políticas de Uso
              </Typography>
            </Link>
            <Link to="/sobre" className={classes.fakeLink}> Sobre </Link>
          </FooterBox>
        </Box>
      </FooterContainer>
    </Grid>
  );
};

export default Footer;
