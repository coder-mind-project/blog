import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Redirect } from 'react-router-dom'
import SearchBar from 'material-ui-search-bar'


import { AppBar, Toolbar, IconButton, Drawer, List, ListItem,
    useMediaQuery, Icon, Box, Grid, Typography } from '@material-ui/core'
    
import { styles } from './styles/Menu'

import { environment } from '../config/environment'

const useStyles = makeStyles(styles)

const Menu = props => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width: 955px)')

    const [state, setState] = React.useState({
        drawerMenu: false,
        redirectTo: '',
        search: ''
    })

    const searchArticles = () => {
        if(state.search.trim().length === 0) return
        window.location.href=`/artigos?q=${state.search}`
    }

    return (
        
        <div>
            {state.redirectTo && 
                <Redirect to={`/${state.redirectTo}`}/>
            }
            <AppBar className={classes.menu}>
                <Toolbar className={classes.menuItems}>
                    <Box className={ matches ? classes.menuASideItems : classes.menuASideItemsXs}>
                        { !matches && 
                            <Box display="flex" alignItems="center">
                                <IconButton onClick={() => setState({drawerMenu: true})} 
                                    edge="start" className={classes.menuButton}
                                    color="inherit" aria-label="Menu"
                                >
                                    <Icon style={{color: "#42275a"}}>menu</Icon>
                                </IconButton>
                            </Box>
                        }
                        <Box display="flex" alignItems="center">
                            <Link className={classes.menuTitle} to="/">
                                <Box display="flex" alignItems="center">
                                    <Box mr={1} display="flex" alignItems="center">
                                        <Icon fontSize="large" >
                                            code
                                        </Icon>
                                    </Box>
                                    <Typography component="h1" variant="h5" className="coder-mind">
                                            Coder Mind
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                        { matches && 
                            <Box display="flex" alignItems="center" marginLeft="20px" marginRight="20px">
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
                    </Box>
                    {matches && 
                        <Box className={classes.searchArea}>
                            <SearchBar
                                value={state.search}
                                onChange={(search) => setState({ search })}
                                onRequestSearch={() => searchArticles()}
                                placeholder="Pesquise por qualquer conteúdo!"
                                width="100%"
                                className="search-input"
                                searchIcon={<Icon className="search-input-button-menu">search</Icon>}
                            />
                        </Box>
                    }
                </Toolbar>
            </AppBar>
            <Drawer open={state.drawerMenu} 
                onClose={() => setState({drawerMenu: false})}
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
                        <Grid item xs={1} sm={1} className={classes.fakeLink}>
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
                                    Sobre
                                </strong>
                            </ListItem>
                        </Link>
                    </List>
                    <List className={classes.list}>
                        <ListItem className={classes.drawerFooter} key={'version'}>
                            <Box display="flex" alignItems="center">
                                <Icon  className={classes.iconButtonMenu}>
                                    code
                                </Icon>
                                {environment.version} - {environment.build}
                            </Box>
                        </ListItem>
                    </List>
                </div>  
            </Drawer>
        </div>
        )
}


export default Menu