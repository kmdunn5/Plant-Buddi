import React, { Component } from 'react'


class SignUp extends Component {

  render() {
    return (
      <div>
        <div className='header-container-signup'>
        <div className='center-hero-signup'>
      <h1 className='signup-text'>Sign Up for Plant Buddi</h1>
      </div>
      </div>
      <div className="main-content">
        <div className='form-content'>
          <form>
            <div className='input-couple'>
              <label>Username</label>
              <input className='signuplogininbox' placeholder="Enter your desired username"/>
            </div>
            <div className='input-couple'>
              <label>Password</label>
              <input className='signuplogininbox' placeholder="Enter your password"/>
            </div>
            <div className='form-actions'>
              <button className='primary-button' type="submit">Sign Up</button>
              <button className='secondary-button' formaction='/'>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    )
  }

}       


export default SignUp;