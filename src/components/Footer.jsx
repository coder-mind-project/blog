import React from 'react';
import {Grid, Box, useMediaQuery, Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faImages} from '@fortawesome/free-regular-svg-icons';
import {styles} from './styles/Footer';


const useStyles = makeStyles(styles);

const Footer = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <Grid item xs={12}>
      <footer className={classes.footerContainer}>
        <Grid item xs={12} className={classes.footerContainerTop}>
          <Grid item xs={12} md={4}>
            <h4 className={classes.topicTitle}><span style={{color: '#FFF'}} className="coder-mind">Saiba mais</span></h4>
            <a href="https://github.com/coder-mind" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
              <Box mr={1}>
                <FontAwesomeIcon icon={faGithub}/>
              </Box>
                            Nossos códigos
            </a>
            <a href="https://www.youtube.com/channel/UCfUbeeEVPxNFPgQ2vij6YwA" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
              <Box mr={1}>
                <FontAwesomeIcon icon={faYoutube} color="red"/>
              </Box>
                            Youtube
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={classes.fakeLink} onClick={() => window.location.href = `/public/media/coder-mind.zip`}>
              <Box mr={1}>
                <FontAwesomeIcon icon={faImages}/>
              </Box>
                            Mídias
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <h4 className={classes.topicTitle}><span style={{color: '#FFF'}} className="coder-mind">Coder Mind</span></h4>
            <Link to="/artigos" className={classes.fakeLink}>Artigos</Link>
            <Link to="/privacidade" className={classes.fakeLink}>políticas de uso</Link>
            <Link to="/sobre" className={classes.fakeLink}>Sobre</Link>
            <Link to="/faq" className={classes.fakeLink}>FAQ</Link>
          </Grid>
          <Grid item xs={12} md={4} className={classes.iconArea}>
            <Icon style={{color: '#fff', fontSize: '8rem'}}>code</Icon>
          </Grid>
        </Grid>
      </footer>
    </Grid>
  );
};

export default Footer;
