import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Plants from './components/Plants.jsx'
import Login from './components/Login'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: false
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path='/'>
          {this.state.user ? 
          <div>
            < Header />
            < Plants />
            < Footer />
          </div> :
          <Redirect to='/login' />
          }
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    )
  }    
}
        

export default App;