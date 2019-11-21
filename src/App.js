import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

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
            {/*! Need to make Header Sticky */}
            {/*! BIG-LOGO-HEADER COMPONENT */}

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
