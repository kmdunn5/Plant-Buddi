import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Plants from './components/Plants.jsx'
import Home from './components/Home.jsx'

class App extends Component {

  render() {
    return (
      <div>
        < Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/plants'>
            < Plants />
          </Route>
        </Switch>
        < Footer />
      </div>
    )
  }    
}
        

export default App;