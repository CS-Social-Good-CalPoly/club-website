import React from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Team from './components/Team';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 




function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/Team" component={Team}/>
          <Route exact path="/Projects" component={Projects}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
