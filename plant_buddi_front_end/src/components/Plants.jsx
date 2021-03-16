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
        <h2>Your Buddies</h2>
        <div className='plant-item-grid'>
          { this.state.plants.map( plant => {
          return (
            <div key={ plant._id } className='plant-item'>
              <div className='plant-item-img'>
                <img src={ plant.image } alt={ plant.commonName } />
              </div>
              <div className='plant-item-name-content'>
                <div className='icon-container'>
                  <p>🍃</p>
                </div>
                <div className='plant-item-name'>
                  <h3>{ plant.commonName }</h3>
                </div>
              </div>
              <div className='plant-item-watered-content'>
                <div className='icon-container'>
                  <p>💧</p>
                </div>
                <div className='plant-item-watered'>
                  <p className='large-text'><span className='semibold-text'>Watered:</span> { plant.lastWatered }</p>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    )
  }    
}
        

export default Plants;