import React from 'react'
import { Grid, Box, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                        <a href="https://github.com/coder-mind" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Box>
                            <strong>Nossos códigos</strong>
                        </a>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <a href="https://www.youtube.com/channel/UCfUbeeEVPxNFPgQ2vij6YwA" rel="noopener noreferrer" target="_blank" className={classes.fakeLink}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faYoutube} color="red"/>
                            </Box>
                            <strong>Youtube</strong>
                        </a>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.fakeLink} onClick={() => window.location.href = `/public/media/coder-mind.zip`}>
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
                        </Box>}
                        <Box p={2} display="flex" justifyContent={matches ? "center" : "flex-end"} width={matches ? "100%" : "inherit"}>
                            <h2 className="coder-mind"><span style={{color: '#FFF'}}>Coder Mind</span></h2>
                        </Box>
                        { matches && <Box display="flex" justifyContent={matches ? 'center' : 'flex-start'} flexWrap="wrap">
                            <Box display="flex" flexDirection={matches ? "row" : "column"} justifyContent="space-between" m={2}>
                                <p className={classes.footerText}>Gostou do conteúdo? consulte nossas <Link to="/privacidade" className={classes.footerText}><u>políticas de uso</u></Link>.</p>
                            </Box>
                        </Box>}
                </Grid>
            </footer>
        </Grid>
    )
}

export default Footer