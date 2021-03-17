import React, { Component } from 'react'


class SignUp extends Component {

  render() {
    return (
      <div className="main-content">
        <h1>Sign Up for Plant Buddi</h1>
        <div className='form-content'>
          <form>
            <div className='input-couple'>
              <label>Username</label>
              <input placeholder="Enter your desired username"/>
            </div>
            <div className='input-couple'>
              <label>Password</label>
              <input placeholder="Enter your password"/>
            </div>
            <div className='form-actions'>
              <button className='primary-button' type="submit">Sign Up</button>
              <button className='secondary-button' formaction='/'>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}       


export default SignUp;