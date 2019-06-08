import React from 'react'
import {Link} from 'react-router-dom'
import './TopMenu.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid'

// import DrawerMenu from './DrawerMenu'
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import {FileCopy, Info} from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF',
        color: '#000'
    },
    titleText: {
        margin: 1,
        fontSize: '1.6rem'
    },
    titleDescription: {
        fontSize: '1rem',
        fontWeight: '100'
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menu: {
        // backgroundColor: '#3E8DC5'
        backgroundColor: '#093170'
    },
    link: {
        color: 'rgba(0,0,0,.9)'
    },
    logo:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(0,0,0,.9)'

    },
    menuButton: {
        color: '#fff',
        display: 'flex',
        fontWeight: 400,
        alignItems: 'center',
        margin: '0px 15px',
        padding: '22px',
        fontSize: '1.1rem',
        '&:hover': {
            backgroundColor: '#CCC',
            color: '#000'
        }
    }
}));

const TopMenu = () => {
    const classes = useStyles()
    const [state, setState] = React.useState({
        left: false,
    })

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
        <List>
            <Link to="/" className={classes.logo}>
                <h2>Estudante de TI</h2>
            </Link>
        </List>
        <Divider />
        <List>
            {['Artigos', 'Sobre'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <FileCopy /> : <Info />}</ListItemIcon>
                    {/* <ListItemText primary={text} /> */}
                    <Link to={`/${text.toLowerCase()}`} className={classes.link}>{text}</Link>
                </ListItem>
            ))}
        </List>
        </div>
    );


    return (
        <div className={classes.root}>
            <Typography variant="h6">
                <Link to="/">
                    <Grid container>
                        <Grid item xs={12} className={classes.title}>
                            <h1 className={classes.titleText}>Estudante de TI</h1>
                            <small className={classes.titleDescription}>A sua fonte de conhecimento</small>
                        </Grid>
                    </Grid>
                </Link>
            </Typography>
            <AppBar className={classes.menu} position="static">
                <Toolbar>
                    <IconButton edge="start" onClick={toggleDrawer('left', true)} className="buttonDrawer" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Link to="/artigos" className={classes.menuButton}>Artigos</Link>
                    <Link to="/sobre" className={classes.menuButton}>Quem sou eu?</Link>
                </Toolbar>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>
            </AppBar>
        </div>
    )
}

export default TopMenu