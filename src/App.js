import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }// end constructor
  
  render(){
    return (
      <div className="App">
        <div id="grid-layout">
          <Router>
            <Header/>

            <Switch>
              <Route exact path='/' component={Homepage}>
              </Route>
              <Route exact path='/donate'>
                DONATE
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }// end render
}// end class App

export default App;
