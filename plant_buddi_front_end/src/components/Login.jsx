import React, { Component } from 'react'


class Login extends Component {

  render() {
    return (
      <div>
      <div className='header-container-login'>
        <h1 className='login-text'>Login</h1>
        </div>
        <div className="main-content">
        <div className='form-content'>
          <form>
            <div className='input-couple'>
              <label>Username</label>
              <input placeholder="Enter your username"/>
            </div>
            <div className='input-couple'>
              <label>Password</label>
              <input placeholder="Enter your password"/>
            </div>
            <div className='form-actions'>
              <button className='primary-button' type="submit">Login</button>
              <button className='secondary-button' formaction='/'>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    )
  }

}       


export default Login;