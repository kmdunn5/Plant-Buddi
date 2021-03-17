import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nickName: '',
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

    // handleSubmit(e) {
    //     e.preventDefault();

    //     fetch(baseURL + '/plants', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ 
    //             title: this.state.title,
    //             url: this.state.url
    //         })
    //     }).then(res => res.json())
    //     .then(resJson => {
    //         this.props.handleAdd(resJson);
    //         this.setState({
    //             title: '',
    //             url: ''
    //         });
    //     }).catch (error => console.log({ 'Error': error }))
    // };

    render() {
        return(
            <div>
                <h3>{this.props.plant.common_name} - <span>{this.props.plant.scientific_name}</span></h3>
                <form>
                    <label htmlFor="nickName"></label>
                    <input type="text" name="nickName" id="nickName" onChange={this.handleChange}/>
                    <label htmlFor="image"></label>
                    <input type="text" name="image" id="image" onChange={this.handleChange}/>
                    <label htmlFor="lastWatered"></label>
                    <input type="text" name="lastWatered" id="lastWatered" onChange={this.handleChange}/>
                    <label htmlFor="howOftenToWater"></label>
                    <input type="text" name="howOftenToWater" id="howOftenToWater" onChange={this.handleChange}/>
                    <label htmlFor="lastFertilized"></label>
                    <input type="text" name="lastFertilized" id="lastFertilized" onChange={this.handleChange}/>
                    <label htmlFor="lightingRequirements"></label>
                    <input type="text" name="lightingRequirements" id="lightingRequirements" onChange={this.handleChange}/>
                    <label htmlFor="notes"></label>
                    <input type="text" name="notes" id="notes" onChange={this.handleChange}/>
                    <input type="submit" value="Add Plant"/>
                </form>
            </div>
        )
    }
}

export default AddForm