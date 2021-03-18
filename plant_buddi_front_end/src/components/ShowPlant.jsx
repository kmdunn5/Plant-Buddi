import React, { Component } from 'react'
// import UpdatePlantForm from './UpdatePlantForm'


class ShowPlant extends Component {
  constructor ( props ) {
    super( props )

    this.state = {
      plant: this.props.plant,
      update: true
    }

  }

  // TOGGLE UPDATE VIEW
  toggleUpdateView( idOfPlant ) {
    this.setState({
      update: !this.state.update
    })
  }

  render() {
    return (
      <div>
        { this.state.update ? (
        <div className='show-plants-content'>
          <div className='user-actions-header'>
            <h2>Your Plant Buddi</h2>
            <div className='user-action-options'>
              <button className='primary-button' onClick={ () => this.toggleUpdateView( this.props.plant._id ) }>Edit</button>
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
        ) : (
          <div>
          <h1>Edit Plant</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='input-couple'>
              <label htmlFor="nickName">Nick Name: </label>
              <input type="text" name="nickName" id="nickName" onChange={this.handleChange} value={ this.props.plant.nickName }/>
            </div>
            <div className='input-couple'>
              <label htmlFor="image">Image: </label>
              <input type="text" name="image" id="image" onChange={this.handleChange} value={ this.props.plant.image }/>
            </div>
            <div className='input-couple'>
              <label htmlFor="lastWatered">Last Watered: </label>
              <input type="text" name="lastWatered" id="lastWatered" onChange={this.handleChange} value={ this.props.plant.lastWatered }/>
            </div>
            <div className='input-couple'>
              <label htmlFor="howOftenToWater">How Often To Water: </label>
              <input type="text" name="howOftenToWater" id="howOftenToWater" onChange={this.handleChange} value={ this.props.plant.howOftenToWater } />
            </div>
            <div className='input-couple'>
              <label htmlFor="lastFertilized">Last Fertilized: </label>
              <input type="text" name="lastFertilized" id="lastFertilized" onChange={this.handleChange} value={ this.props.plant.lastFertilized }/>
            </div>
            <div className='input-couple'>
              <label htmlFor="lightingRequirements">Light Needs: </label>
              <input type="text" name="lightingRequirements" id="lightingRequirements" onChange={this.handleChange} value={ this.props.plant.lightingRequirements } />
            </div>
            <div className='input-couple'>
              <label htmlFor="notes">Notes: </label>
              <input type="text" name="notes" id="notes" onChange={this.handleChange} value={ this.props.plant.notes }/>
            </div>
            <div className='form-actions'>
              <button className='primary-button' type="submit">Update plant buddi</button>
              <button className='secondary-button' onClick={ () => this.toggleUpdateView( this.props.plant._id ) }>Cancel</button>
            </div>
          </form>
        </div> 
        )}
      </div>
    )
  }

}       


export default ShowPlant;