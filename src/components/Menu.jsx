import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Redirect } from 'react-router-dom'


import { AppBar, Toolbar, IconButton, Drawer, List, ListItem,
    useMediaQuery, Icon, Box, Grid } from '@material-ui/core'
    
import { styles } from './styles/Menu'

import { version, build } from '../config/appConfig'

const useStyles = makeStyles(styles)

const Menu = props => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width: 820px)')

    const [state, setState] = React.useState({
        drawerMenu: false,
        redirectTo: ''
    })

    return (
        
        <div>
            {state.redirectTo && 
                <Redirect to={`/${state.redirectTo}`}/>
            }
            <AppBar className={classes.menu}>
                <Toolbar className={classes.menuItems}>
                    { !matches && 
                        <Box display="flex" alignItems="center">
                            <IconButton onClick={() => setState({drawerMenu: true})} 
                                edge="start" className={classes.menuButton}
                                color="inherit" aria-label="Menu"
                            >
                                <Icon>menu</Icon>
                            </IconButton>
                        </Box>
                    }
                    <Box display="flex" alignItems="center">
                        <Link className={classes.link} to="/">
                            <h1 className="coder-mind">
                                Coder Mind
                            </h1>
                        </Link>
                    </Box>
                    { matches && 
                        <Box display="flex" alignItems="center">
                            <Link to="/artigos" className={classes.menuLink}>
                                <span className={classes.menuItem}>
                                    Artigos
                                </span>
                            </Link>
                            <Link to="/sobre" className={classes.menuLink}>
                                <span className={classes.menuItem}>
                                    Sobre
                                </span>
                            </Link>
                            <Link to="/faq" className={classes.menuLink}>
                                <span className={classes.menuItem}>
                                    FAQ
                                </span>
                            </Link>
                        </Box>
                    }
                </Toolbar>
            </AppBar>
            <Drawer open={state.drawerMenu} 
                onClose={() => setState({drawerMenu: false  })}
                anchor="top"
            >
                <Box className={classes.drawerLink} onClick={() => setState({drawerMenu: false})}>
                    <Box className={classes.logo}>
                        <Grid item xs={10} sm={11}>
                            <Box width="100%" height="100%" display="flex" ml={5} mr={5} alignItems="center">
                                <h1 className="coder-mind">
                                    Coder Mind
                                </h1>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={1} className={classes.fakeLink}>
                            <Icon fontSize="large" onClick={() => setState({drawerMenu: false})}>clear</Icon>
                        </Grid>
                    </Box>
                </Box>
                <div className={classes.drawer}>
                    <List className={classes.list}>
                        <Link to="/artigos" className={classes.buttonLink}
                            onClick={() => setState({drawerMenu: false})}
                        >
                            <ListItem button key={'articles'} 
                                className={classes.drawerButton}
                            >
                                <strong className={classes.menuButtonContent}>
                                    <Icon  className={classes.iconButtonMenu}>
                                        library_books
                                    </Icon>
                                    Artigos
                                </strong>
                            </ListItem>
                        </Link>
                        <Link to="/privacidade" className={classes.buttonLink}
                            onClick={() => setState({drawerMenu: false})}
                        >
                            <ListItem button key={'use'} 
                                className={classes.drawerButton}
                            >
                                <strong className={classes.menuButtonContent}>
                                    <Icon  className={classes.iconButtonMenu}>
                                        security
                                    </Icon>
                                    Políticas de uso
                                </strong>
                            </ListItem>
                        </Link>
                        <Link to="/faq" className={classes.buttonLink}
                            onClick={() => setState({drawerMenu: false})}
                        >
                            <ListItem button key={'faq'}
                                className={classes.drawerButton}
                            >
                                <strong className={classes.menuButtonContent}>
                                    <Icon  className={classes.iconButtonMenu}>
                                        question_answer
                                    </Icon>
                                    FAQ
                                </strong>
                            </ListItem>
                        </Link>
                        <Link to="/sobre" className={classes.buttonLink}
                            onClick={() => setState({drawerMenu: false})}
                        >
                            <ListItem button key={'about'}
                                className={classes.drawerButton}
                            >
                                <strong className={classes.menuButtonContent}>
                                    <Icon  className={classes.iconButtonMenu}>
                                        info
                                    </Icon>
                                    Sobre
                                </strong>
                            </ListItem>
                        </Link>
                    </List>
                    <List className={classes.list}>
                        <ListItem className={classes.drawerFooter} key={'version'}>
                            <span className={classes.menuButtonContent}>
                                <Icon  className={classes.iconButtonMenu}>
                                    code
                                </Icon>
                                {version} - {build}
                            </span>
                        </ListItem>
                    </List>
                </div>  
            </Drawer>
        </div>
        )
}


export default Menu