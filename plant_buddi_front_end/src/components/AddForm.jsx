import React, { Component } from 'react';

let baseURL = '';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'heroku URL';
};

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nickName: '',
            image: '',
            lastWatered: '',
            howOftenToWater: '',
            lastFertilized: '',
            lightingRequirements: '',
            notes: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // handleImageChange(e) {
    //     this.setState({
    //         image: this.props.plant.image_url
    //     })
    // }

    handleSubmit(e) {
        e.preventDefault();

        fetch(baseURL + '/plants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                commonName: this.props.plant.common_name,
                nickName: this.state.nickName,
                scientificName: this.props.plant.scientific_name,
                image: this.state.image,
                lastWatered: this.state.lastWatered,
                howOftenToWater: this.state.howOftenToWater,
                lastFertilized: this.state.lastFertilized,
                lightingRequirements: this.state.lightingRequirements,
                notes: this.state.notes
            })
        }).then(res => res.json())
        .then(resJson => {
            this.props.handleAdd(resJson);
            this.setState({
                nickName: '',
                image: '',
                lastWatered: '',
                howOftenToWater: '',
                lastFertilized: '',
                lightingRequirements: '',
                notes: ''
            });
        }).catch (error => console.log({ 'Error': error }))
    };

    render() {
        return(
            <div>
                <h3>{this.props.plant.common_name} - <span>{this.props.plant.scientific_name}</span></h3>
                <form>
                    <label htmlFor="nickName">Nick Name: </label>
                    <input type="text" name="nickName" id="nickName" onChange={this.handleChange}/>
                    <label htmlFor="image">Image: </label>
                    <input type="text" name="image" id="image" onChange={this.handleChange}/>
                    <label htmlFor="lastWatered">Last Watered: </label>
                    <input type="text" name="lastWatered" id="lastWatered" onChange={this.handleChange}/>
                    <label htmlFor="howOftenToWater">How Often To Water: </label>
                    <input type="text" name="howOftenToWater" id="howOftenToWater" onChange={this.handleChange}/>
                    <label htmlFor="lastFertilized">Last Fertilized: </label>
                    <input type="text" name="lastFertilized" id="lastFertilized" onChange={this.handleChange}/>
                    <label htmlFor="lightingRequirements">Light Needs: </label>
                    <input type="text" name="lightingRequirements" id="lightingRequirements" onChange={this.handleChange}/>
                    <label htmlFor="notes">Notes: </label>
                    <input type="text" name="notes" id="notes" onChange={this.handleChange}/>
                    <input type="submit" value="Add Plant"/>
                </form>
            </div>
        )
    }
}

export default AddForm