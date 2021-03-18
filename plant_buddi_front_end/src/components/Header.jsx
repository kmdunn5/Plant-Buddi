import React, { Component } from 'react'


class Header extends Component {

  render() {
    return (
      <header className="header-content">
        <div className='icons-title'>
        <div className='app-icon-container1'></div>
        <h1>Plant Buddi</h1>
        <div className='app-icon-container2'></div>
        </div>
        <h4>Plant Care Tracker</h4>
        <div className='header-links'>
        <h2><a href='#'>Home</a></h2>
        <h2><a href='#'>Sign Up</a></h2>
        <h2><a href='#'>Log In</a></h2>
        </div>
      </header>
    )
  }

}       


export default Header;