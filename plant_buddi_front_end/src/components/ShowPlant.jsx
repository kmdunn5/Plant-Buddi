import React, { Component } from 'react'


class ShowPlant extends Component {
  // constructor ( props ) {
  //   super( props )

  //   this.state = {
  //     plant: this.props.plant,
  //   }

  // }

  render() {
    return (
      <div className='show-plants-content'>
        <div className='user-actions-header'>
          <h2>Your Plant Buddi</h2>
          <div className='user-action-options'>
            <button className='primary-button'>Edit</button>
            <button className='secondary-button' onClick={ () => this.props.deletePlant( this.props.plant._id ) }>Delete</button>
          </div>
        </div>
        <div className='show-plant-container'>
          <div className='show-plant-img'>
            <img src='https://i.ibb.co/w4x4jFC/3df51f155b9083e5facd284384d85c70c7605e8c.jpg' alt='Plant' />
          </div>
          <div className='show-plant-content'>
            <div className='show-plant-name'>
              <h2>{ this.props.plant.nickName } - { this.props.plant.commonName }</h2>
              <p>{ this.props.plant.scientificName }</p>
            </div>
            <div className='show-plant-info'>
              <div className='show-plant-info-text'>
                <p className='large-text'>Last watered: { this.props.plant.lastWatered }</p>
                <p className='large-text'>Water every: { this.props.plant.howOftenToWater }</p>
                <p className='large-text'>Last fertilized: { this.props.plant.lastFertilized }</p>
                <p className='large-text'>Light needs: { this.props.plant.lightingRequirements }</p>
              </div>
              <div className='show-plant-info-notes'>
                <p className='large-text'>Notes on your buddi</p>
                <p>{ this.props.plant.notes }</p>
              </div>
            </div>
          </div>
        </div>
        <button className='primary-button'>Back to plants</button>
      </div>
    )
  }

}       


export default ShowPlant;