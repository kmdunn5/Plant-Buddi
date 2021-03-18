import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
import Search from './Search'
// import ShowPlant from './ShowPlant'


let baseURL = 'http://localhost:3003'


class Plants extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: [],
      foundPlants: [],
      search: '',
      searchState: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this)
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

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let searchParam = this.state.search
    fetch(baseURL + '/plants/search/' + searchParam)
    .then(data => { return data.json() }, err => console.log(err))
    .then(parsedData => this.setState({
        foundPlants: parsedData.data,
        search: '',
        searchState: true
    }), err => console.log(err));
  }

  handleAdd(plant) {
    const copyPlants = [...this.state.plants];
    copyPlants.unshift(plant);
    this.setState({
        plants: copyPlants,
        searchState: false
    });
  };

  // DELETE PLANT
  deletePlant = ( idOfPlant ) => {
    fetch( baseURL + '/plants/' + idOfPlant, {
      method: 'DELETE'
    }).then( response => {
      const findIndex = this.state.plants.findIndex( ( plant ) => plant._id === idOfPlant )
      const copyPlants = [ ...this.state.plants ]
      copyPlants.splice( findIndex, 1 )
      console.log( findIndex )
      this.setState({ 
        plants: copyPlants 
      })
    })
  }

  render() {
    return (
      <div>
        <div className='search-container'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='search'>Search for a Plant Buddi: </label>
            <input type="text" name='search' id='search' placeholder="Enter Your Plant's Type" onChange={this.handleChange} value={this.state.search}/>
            <input 
            className='search-button'
            type="submit" value="Search"/>
          </form>
        </div>
        {this.state.searchState ? 
        <Search foundPlants={this.state.foundPlants} handleAdd={this.handleAdd}/> :
        <div className='main-content'>
          <h2>Your Buddies</h2>
          <div className='plant-item-grid'>
            { this.state.plants.map( plant => {
            return (
              <div key={ plant._id } className='plant-item'>
                <div className='plant-item-img'>
                  <img className='card-img' src={ plant.image } alt={ plant.commonName } />
                </div>
                <div className='plant-item-name-content'>
                  <div className='icon-container'>
                    <p>🍃</p>
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
                      <div className='edit-icon-container'>
                        <p>✏️</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* < ShowPlant plant={ plant } deletePlant={ this.deletePlant }/> */}
              </div>
            )
            })}
          </div>
        </div>
        }
      </div>
    )
  }
}
        

export default Plants;