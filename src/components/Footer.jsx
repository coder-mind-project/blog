import React from 'react'
import { Grid, Box, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faImages } from '@fortawesome/free-regular-svg-icons'
import {styles} from './styles/Footer'


const useStyles = makeStyles(styles)

const Footer = (props) => {
    const classes = useStyles()
    const matches = useMediaQuery('(max-width: 768px)')

    return (
        <Grid item xs={12}>
            <footer className={classes.footerContainer}>
                <Grid item xs={12} sm={6} className={classes.footerContainerChildStart}>
                    <Grid item xs={12} sm={6}>
                        <Box className={classes.fakeLink}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faImages}/>
                            </Box>
                            <strong>Mídias</strong>
                        </Box>
                        <a href="https://facebook.com/" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faFacebookSquare} color="#4267b2"/>
                            </Box>
                            <strong>Facebook</strong>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <a href="https://github.com/" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Box>
                            <strong>Github</strong>
                        </a>
                        <a href="https://youtube.com/" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faYoutube} color="red"/>
                            </Box>
                            <strong>Youtube</strong>
                        </a>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.footerContainerChildEnd}>
                    <Box display="flex">
                        <Box display="flex" flexDirection={matches ? "row" : "column"} justifyContent="space-between" m={2}>
                            <p className={classes.footerText}>Gostou do conteúdo? consulte nossas <Link to="/privacidade" className={classes.footerText}><u>políticas de uso</u></Link>.</p>
                            <p className={classes.footerText}>Desenvolvido com <FontAwesomeIcon icon={faHeart} color="red" /> por <a href="https://github.com/allanalves23" className={classes.footerText}><u>Allan Wanderley</u></a></p>
                        </Box>
                        <Box p={2}>
                            <FontAwesomeIcon icon={faGithub} color="white" size="4x"/>
                        </Box>
                    </Box>
                </Grid>
            </footer>
        </Grid>
    )
}

export default Footer