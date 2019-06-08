import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Copyright from '@material-ui/icons/CopyrightOutlined'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Tooltip from '@material-ui/core/Tooltip'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(theme => ({
    icon: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    footerBar: {
        // backgroundColor: '#3E8DC5',
        backgroundColor: '#093170',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: '0.9rem',
        color: '#FFF'
    },
    contentLeft: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contentCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    contentVertical: {
        margin: 0,
        display: 'flex',
        flexDirection: 'column'
    },
    link: {
        fontWeight: 500,
        color: '#FFF',
    
    }
}))

const Footer = () => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width: 768px)')
    const yMoment = new Date().getFullYear()
    return (
        <Grid container>
            <Grid item xs={12} className={classes.footerBar}>
                <Grid item xs={matches ? 6 : 12} className={classes.contentVertical}>
                    <Grid item xs={12} className={matches ? classes.contentLeft : classes.contentCenter}>
                        <Copyright className={classes.icon} htmlColor='white'/>
                        <p>{yMoment} Todos os direitos reservados</p> <p className={classes.icon}>|</p> <p>Desenvolvido por&nbsp;<a href='/sobre' className={classes.link}>Estudante de TI</a></p>
                    </Grid>
                </Grid>
                <Grid item xs={matches ? 6 : 12}>
                    <Grid item xs={12} className={matches ? classes.contentRight : classes.contentCenter}>
                        <Tooltip title="Siga nosso canal">
                            <Button href="https://youtube.com.br/" target="_blank">
                                <FontAwesomeIcon icon={faYoutube} color='red' size='lg'/>
                            </Button>
                        </Tooltip>
                        <Tooltip title="Github">
                            <Button href="https://github.com/allanalves23" target="_blank">
                                <FontAwesomeIcon icon={faGithub} color='black' size='lg'/>
                            </Button>
                        </Tooltip>
                        <Tooltip title="Linkedin">
                            <Button href="https://linkedin.com/in/allanalves23" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} color='white' size='lg'/>
                            </Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer