import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class About extends Component {
  render() {
    return (
      <ScrollableAnchor id={'about'}>
        <section id="about" className="section-padding wow fadeIn delay-05s">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-right">
                <h2 className="title-text">
                  Meet<br /><span className="deco">Laura</span> Thomson
                </h2>
              </div>
              <div className="col-md-6 text-left">
                <div className="about-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>&nbsp;</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>&nbsp;</p>
                  <ul className="abt-list">
                    <li>- Excepteur sint occaecat cupidatat non proident.</li>
                    <li>- Duis aute irure dolor in reprehenderit.</li>
                    <li>- Ask the experts.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default About;
