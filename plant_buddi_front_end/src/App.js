import React, { Component } from 'react'
// import { Route, Router, Switch } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Plants from './components/Plants.jsx'


class App extends Component {

  render() {
    return (
      <div>
        < Header />
        < Plants />
        < Footer />
      </div>
    )
  }    
}
        

export default App;