import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'


let baseURL = 'http://localhost:3003'


class Plants extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: []
    }
  }
  componentDidMount(){
    this.getPlants()
  }

  getPlants = () => {
    fetch(baseURL + '/plants')
      .then(data => {
        return data.json()},
        err => console.log(err))
      .then(parsedData => this.setState({
        plants: parsedData
      }),
       err=> console.log(err))
  }

  render() {
    return (
      <div className='main-content'>
        <h1>Plant Buddi</h1>
          { this.state.plants.map( plant => {
          return (
            <div key={ plant._id }>  
              <h3> { plant.commonName } </h3>
              <h3> { plant.scientificName } </h3>
            </div>
            )
          })}
      </div>
    )
  }    
}
        

export default Plants;