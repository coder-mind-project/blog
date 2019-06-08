import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TopMenu from './components/items/global/TopMenu'
import HomePage from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import Footer from './components/items/global/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <TopMenu></TopMenu>
        <div className="appContent">
          <Route path="/" exact component={HomePage}></Route>     
          <Route path="/sobre" exact component={AboutMe}></Route>     
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App
