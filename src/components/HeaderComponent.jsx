import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <header fixed="top">
          <nav className='navbar navbar-expand-md navbar-danger bg-danger bg-gradient-light'>
            <div><a href="./Home" class="navbar-brand" >New Life Blood Bank</a></div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./Home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./About">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./Contact">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./Login">Login</a>
              </li>
            </ul>
          </nav>

          <nav className='navbar navbar-expand-md navbar-light bg-light bg-gradient-light'>
            <marquee behavior="scroll" direction="left"> Blood Donation Camp is arranged at Chatrapati Shivaji College, Basmath road, Parbhani
              on 15 August 2022 </marquee>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;