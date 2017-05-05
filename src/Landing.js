import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow fadeIn delay-05s">
              <div className="banner-text">
                <h2>Hi, I am <span>François</span></h2>
                <p>The perfect advisor for your <br /> next tv session</p>
              </div>
              <div className="overlay-detail text-center">
                <a href="#about"><i className="fa fa-angle-down"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
