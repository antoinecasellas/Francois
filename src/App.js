import React, { Component } from 'react';
import HeaderContent from './HeaderContent';
import About from './About';
import './css/animate.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/main.css';

class App extends Component {

  constructor(props, event) {
    super(props)
    this.state = {'nav': ''};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (event.pageY > 50) {
      this.setState({'nav': 'top-nav-collapse'});
    } else {
      this.setState({'nav': ''});
    }
  }

  render() {

    return (
      <div className="header">
        <div className="bg-color">
          <header id="main-header">
            <nav className={'navbar navbar-default navbar-fixed-top ' + this.state.nav}>
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#lauraMenu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">François</a>
                </div>
                <div className="collapse navbar-collapse" id="lauraMenu">
                  <ul className="nav navbar-nav navbar-right navbar-border">
                    <li className="active"><a href="#main-header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <HeaderContent />
        </div>
        <About />
      </div>
    );
  }
}

export default App;
