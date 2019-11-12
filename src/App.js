import React, {Component} from 'react';
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
        <Header/>
        <Homepage/>
      </div>
    );
  }// end render
}// end class App

export default App;
