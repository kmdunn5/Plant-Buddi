import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Plants from './components/Plants.jsx'
import Login from './components/Login'


class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/'>  
          <div>
            < Header />
            < Plants />
            < Footer />
          </div>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    )
  }    
}
        

export default App;