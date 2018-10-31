import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container } from 'reactstrap'
import { SideNav } from './components/SideNav';
import Home from './components/Home';
import Education from './components/Education';
import SkillExperience from './components/Skills';
import { Contact } from './components/Contact';
import './App.css'

class App extends Component {
  
  render() {
    return (
      <Router>
        <Container>
          <SideNav />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/skills" component={SkillExperience} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </Container>
      </Router>
      
    );
  }
}

export default App;
