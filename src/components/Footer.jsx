import React from 'react'
import { Grid, Box, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faImages } from '@fortawesome/free-regular-svg-icons'
import {styles} from './styles/Footer'


const useStyles = makeStyles(styles)

const Footer = (props) => {
    const classes = useStyles()
    const matches = useMediaQuery('(max-width: 768px)')

    return (
        <Grid item xs={12}>
            <footer className={classes.footerContainer}>
                <Grid item xs={12} className={classes.footerContainerTop}>
                    <Grid item xs={12} md={4}>
                        <a href="https://github.com/" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Box>
                            <strong>Nossos códigos</strong>
                        </a>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <a href="https://youtube.com/" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faYoutube} color="red"/>
                            </Box>
                            <strong>Youtube</strong>
                        </a>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.fakeLink}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faImages}/>
                            </Box>
                            <strong>Mídias</strong>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.footerContainerBottom}>
                        { !matches && <Box display="flex" justifyContent={matches ? 'center' : 'flex-start'} flexWrap="wrap">
                            <Box display="flex" flexDirection={matches ? "row" : "column"} justifyContent="space-between" m={2}>
                                <p className={classes.footerText}>Gostou do conteúdo? consulte nossas <Link to="/privacidade" className={classes.footerText}><u>políticas de uso</u></Link>.</p>
                            </Box>
                            <Box display="flex" flexDirection={matches ? "row" : "column"} justifyContent="space-between" m={2}>
                                <p className={classes.footerText}>Desenvolvido com <FontAwesomeIcon icon={faHeart} color="red" /> por <a href="https://github.com/allanalves23" className={classes.footerText}><u>Allan Wanderley</u></a></p>
                            </Box>
                        </Box>}
                        <Box p={2} display="flex" justifyContent={matches ? "center" : "flex-end"} width={matches ? "100%" : "inherit"}>
                            <h2 className="coder-mind"><span style={{color: '#FFF'}}>Coder Mind</span></h2>
                        </Box>
                        { matches && <Box display="flex" justifyContent={matches ? 'center' : 'flex-start'} flexWrap="wrap">
                            <Box display="flex" flexDirection={matches ? "row" : "column"} justifyContent="space-between" m={2}>
                                <p className={classes.footerText}>Gostou do conteúdo? consulte nossas <Link to="/privacidade" className={classes.footerText}><u>políticas de uso</u></Link>.</p>
                            </Box>
                            <Box display="flex" flexDirection={matches ? "row" : "column"} justifyContent="space-between" m={2}>
                                <p className={classes.footerText}>Desenvolvido com <FontAwesomeIcon icon={faHeart} color="red" /> por <a href="https://github.com/allanalves23" className={classes.footerText}><u>Allan Wanderley</u></a></p>
                            </Box>
                        </Box>}
                </Grid>
            </footer>
        </Grid>
    )
}

export default Footer