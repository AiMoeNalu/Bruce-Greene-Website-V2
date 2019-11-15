import React, {Component} from 'react';
import './App.css';

import Header from './components/Header/Header';

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
          <Header/>
        </div>
      </div>
    );
  }// end render
}// end class App

export default App;
