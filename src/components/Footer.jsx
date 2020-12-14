import React from 'react';
import {Grid, Box, Icon, Typography, useMediaQuery} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {styles} from './styles/Footer';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 955px)');

  return (
    <Grid item xs={12}>
      <Box
        component="footer"
        className={classes.footerContainer}
      >
        <Box
          display="flex"
          justifyContent="between"
          flexWrap="wrap"
          alignItems="center"
          width="100%"
        >
          <Box
            width={matches ? '50%' : '100%'}
            marginBottom={matches ? 0 : '2rem'}
          >
            <Box className={classes.iconArea}>
              <Icon className={classes.icon}>code</Icon>
              <Typography className="codermind">
                Coder Mind
              </Typography>
            </Box>
            <Box className={classes.iconDescription}>
              <Typography align="center">
                &copy; {new Date().getFullYear()}
              </Typography>
            </Box>
          </Box>
          <Box width={matches ? '50%' : '100%'}>
            <a href="https://github.com/coder-mind-project" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <Link to="/privacidade" className={classes.fakeLink}>
              <Typography component="span" variant="body1">
                Políticas de Uso
              </Typography>
            </Link>
            <Link to="/sobre" className={classes.fakeLink}> Sobre </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;
