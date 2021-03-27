import React from 'react';
import './App.css';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Projects from './components/Projects/Projects';
import Nav from './components/SharedComponents/Nav';
import Contact from './components/ContactUs/Contact';
import Officers from './components/Officers/Officers';
import Calendar from './components/Calendar/Calendar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import BackgroundShapes from './components/SharedComponents/BackgroundShapes';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/Officers" component={Officers}/>
          <Route exact path="/Background" component={BackgroundShapes}/>
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
