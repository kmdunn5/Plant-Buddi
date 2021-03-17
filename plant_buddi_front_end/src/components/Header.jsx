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
        <button>Sign Up</button>
        <button>Log In</button>
      </header>
    )
  }

}       


export default Header;