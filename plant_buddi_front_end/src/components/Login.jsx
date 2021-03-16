import React, { Component } from 'react'


class Login extends Component {

  render() {
    return (
      <div className="main-content">
        <h1>Login</h1>
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
              <button className='secondary-secondary' formaction='/'>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}       


export default Login;