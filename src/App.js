import React from 'react';
import './App.css';
import WhatWeDo from './components/WhatWeDo';
import Projects from './components/Projects';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Officers from './components/Officers';
import Calendar from './components/Calendar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/Officers" component={Officers}/>
          <Route exact path="/Calendar" component={Calendar}/>
          <Route exact path="/Projects" component={Projects}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route path="/" component={WhatWeDo}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
