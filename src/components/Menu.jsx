import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link, NavLink, useHistory} from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  Icon,
  Box,
  Grid,
  Typography,
} from '@material-ui/core';

import {environment} from '../config/environment';
import {styles} from './styles/Menu';

const useStyles = makeStyles(styles);

const Menu = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 955px)');
  const history = useHistory();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [search, setSearch] = useState('');


  const toogleDrawerMenu = () => {
    setDrawerVisible(!drawerVisible);
  };

  const searchArticles = () => {
    if (search) {
      history.push(`/artigos?q=${search}`);
    }
  };

  return (
    <Box>
      <AppBar className={classes.menu}>
        <Toolbar className={classes.menuItems}>
          <Box
            className={
              matches ?
                classes.menuASideItems :
                classes.menuASideItemsXs
            }
          >
            { !matches &&
              <Box display="flex" alignItems="center">
                <IconButton
                  onClick={toogleDrawerMenu}
                  edge="start" className={classes.menuButton}
                  color="inherit"
                >
                  <Icon style={{color: '#42275a'}}>menu</Icon>
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
                  <Typography
                    component="h1"
                    variant="h5"
                    className="codermind"
                  >
                    Coder Mind
                  </Typography>
                </Box>
              </Link>
            </Box>
            { matches &&
              <Box
                display="flex"
                alignItems="center"
                marginLeft="20px"
                marginRight="20px"
              >
                <NavLink
                  to="/artigos"
                  className={classes.menuLink}
                  activeClassName={classes.activeLink}
                >
                  <Box className={classes.menuItem}>
                    Artigos
                  </Box>
                </NavLink>
                <NavLink
                  to="/sobre"
                  className={classes.menuLink}
                  activeClassName={classes.activeLink}
                >
                  <Box className={classes.menuItem}>
                    Sobre
                  </Box>
                </NavLink>
                <a href={environment.panel} className={classes.menuLink}>
                  <Box className={classes.menuItem}>
                    Painel
                  </Box>
                </a>
              </Box>
            }
          </Box>
          {matches &&
            <Box className={classes.searchArea}>
              <SearchBar
                value={search}
                onChange={(searchValue) => setSearch(searchValue)}
                onRequestSearch={searchArticles}
                placeholder="Pesquise por qualquer conteúdo!"
                width="100%"
                className="search-input"
                searchIcon={
                  (<Icon color="primary">search</Icon>)
                }
              />
            </Box>
          }
        </Toolbar>
      </AppBar>
      <Drawer open={drawerVisible}
        onClose={toogleDrawerMenu}
        anchor="top"
      >
        <Box
          className={classes.drawerLink}
          onClick={toogleDrawerMenu}
        >
          <Box className={classes.logo}>
            <Grid item xs={10} sm={11}>
              <Box
                width="100%"
                height="100%"
                display="flex"
                ml={5}
                mr={5}
                alignItems="center"
              >
                <Typography component="h1" variant="h4" className="codermind">
                  Coder Mind
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1} sm={1} className={classes.fakeLink}>
              <Icon
                fontSize="large"
                onClick={toogleDrawerMenu}>
                  clear
              </Icon>
            </Grid>
          </Box>
        </Box>
        <Box className={classes.drawer}>
          <List className={classes.list}>
            <NavLink
              to="/artigos"
              className={classes.buttonLink}
              activeClassName={classes.activeLink}
              onClick={toogleDrawerMenu}
            >
              <ListItem
                button
                key={'articles'}
                className={classes.drawerButton}
              >
                <Typography
                  component="strong"
                  variant="h5"
                  className={classes.menuButtonContent}
                >
                  Artigos
                </Typography>
              </ListItem>
            </NavLink>
            <NavLink
              to="/sobre"
              className={classes.buttonLink}
              activeClassName={classes.activeLink}
              onClick={toogleDrawerMenu}
            >
              <ListItem
                button
                key={'about'}
                className={classes.drawerButton}
              >
                <Typography
                  component="strong"
                  variant="h5"
                  className={classes.menuButtonContent}
                >
                  Sobre
                </Typography>
              </ListItem>
            </NavLink>
            <a href={environment.panel} className={classes.buttonLink}>
              <ListItem
                button
                key={'panel'}
                className={classes.drawerButton}
              >
                <Typography
                  component="strong"
                  variant="h5"
                  className={classes.menuButtonContent}
                >
                Painel
                </Typography>
              </ListItem>
            </a>
            <NavLink
              to="/privacidade"
              className={classes.buttonLink}
              activeClassName={classes.activeLink}
              onClick={toogleDrawerMenu}
            >
              <ListItem
                button
                key={'use'}
                className={classes.drawerButton}
              >
                <Typography
                  component="strong"
                  variant="h5"
                  className={classes.menuButtonContent}
                >
                  Políticas de uso
                </Typography>
              </ListItem>
            </NavLink>
          </List>
          <List className={classes.list}>
            <ListItem className={classes.drawerFooter} key={'version'}>
              <Box display="flex" alignItems="center">
                <Icon className={classes.iconButtonMenu}>
                  code
                </Icon>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};


export default Menu;
