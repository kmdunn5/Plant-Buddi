import React, { Component } from 'react'
// import { Route, Router, Switch } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Plants from './components/Plants.jsx'
// import Home from './components/Home.jsx'
// import SignUp from './components/SignUp.jsx'
// import Login from './components/Login.jsx'

class App extends Component {

  render() {
    return (
      <div>
        < Header />
        {/* < Home /> */}
        < Plants />
        < Footer />
      </div>
    )
  }    
}
        

export default App;