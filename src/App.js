import React, { Component } from 'react';
import Header from './Header';
import Landing from './Landing';
import About from './About';
import './css/animate.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/main.css';

class App extends Component {

  render() {

    return (
      <div className="header">
        <div className="bg-color">
          <Header />
          <Landing />
        </div>
        <About />
      </div>
    );
  }

}

export default App;
