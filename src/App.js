import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Box} from '@material-ui/core';

import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ArticlesList from './pages/ArticlesList.jsx';
import Article from './pages/Article.jsx';
import Privacity from './pages/Privacity.jsx';
import Faq from './pages/Faq.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

import ScrollToTop from './config/ScrollToTop';

import './App.css';
import './config/axios';


const App = () => {
  return (
    <Box className="App">
      <Router>
        <Menu />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/artigos" exact component={ArticlesList}></Route>
            <Route path="/artigos/:resource" exact component={Article}></Route>
            <Route path="/privacidade" exact component={Privacity}></Route>
            <Route path="/faq" exact component={Faq}></Route>
            <Route path="/sobre" exact component={About}></Route>
            {/* <Route path="/autor/:id" exact component={Author}></Route> */}
            <Route component={NotFound}></Route>
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;
