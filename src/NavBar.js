import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App'
import Newapp from './Newapp';
import Display from './Display';

class App1 extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <div id="page-body">
            <Switch>
              <Route path="/" component={Newapp} exact />
              <Route path="/about" component={Display} />
            
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App1;
