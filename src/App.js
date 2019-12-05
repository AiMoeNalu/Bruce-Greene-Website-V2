import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './App.css';

import HeaderCanvas from './components/Header-Canvas/HeaderCanvas';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import SignInAndSignUp from './pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null,
      navLinks:[
      <li><NavLink to='/donate'>Donate</NavLink></li>,
      <li><NavLink to='/events'>Events</NavLink></li>,
      <li><NavLink to='/store'>store</NavLink></li>,
      <li><NavLink to='/signin'>Login</NavLink></li>]
    }
  }// end constructor

  render(){
    const {navLinks} = this.state;
    return (
      <div className="App">
        <div id="grid-layout">
          <Router>
            <Header navLinks={navLinks}/> 
            {/**Create a Conditional for HeaderCanvas to only display when on Homepage */}
            <HeaderCanvas/>
            
            <Switch>
              <Route exact path='/' component={Homepage}/>
              <Route exact path='/signin' component={SignInAndSignUp}/>
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
