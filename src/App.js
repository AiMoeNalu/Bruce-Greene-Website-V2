import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import HeaderCanvas from './components/Header-Canvas/HeaderCanvas';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import Footer from './components/Footer/Footer';

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
            {/**Create a Conditional for HeaderCanvas to only display when on Homepage */}
            <HeaderCanvas/>
            
            <Switch>
              <Route exact path='/' component={Homepage}>
              </Route>
              <Route exact path='/donate'>
                DONATE
              </Route>
            </Switch>

            <Footer/>
          </Router>
        </div>
      </div>
    );
  }// end render
}// end class App

export default App;
