import React, { Component } from 'react'


class UpdatePlantForm extends Component {
  
  constructor ( props ) {
    super( props )

    this.state = {
      bookmark: this.props.bookmark,
      update: this.props.update
    }

  }

  render() {
    return (
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
    )
  }

}       


export default UpdatePlantForm;