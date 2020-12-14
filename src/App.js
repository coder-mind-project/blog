import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Box} from '@material-ui/core';

import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import ArticlesList from './pages/ArticlesList.jsx';
import Article from './pages/Article.jsx';
import Privacity from './pages/Privacity.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

import ScrollToTop from './config/ScrollToTop';

import {MuiThemeProvider} from '@material-ui/core/styles';
import {standard} from './config/themes';

import './index.css';
import './config/axios';


const App = () => {
  const theme = standard();

  return (
    <MuiThemeProvider theme={theme}>
      <Box className="App">
        <Router>
          <Menu />
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/artigos" exact component={ArticlesList} />
              <Route path="/artigos/:resource" exact component={Article} />
              <Route path="/privacidade" exact component={Privacity} />
              <Route path="/sobre" exact component={About} />
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
          <Footer />
        </Router>
      </Box>
    </MuiThemeProvider>
  );
};

export default App;
