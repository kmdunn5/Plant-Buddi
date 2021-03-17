import React, { Component } from 'react';

let baseURL = '';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'heroku URL';
};

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foundPlants: [],
            search: ''
        }
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
            foundPlants: parsedData
        }), err => console.log(err));
    }
    
    render() {
        return (
            <div className='search-container'>
                <form onSubmit={() => this.handleSubmit()}>
                    <label htmlFor='search'>Search for a Plant Buddi: </label>
                    <input type="text" name='search' id='search' placeholder="Enter Your Plant's Type" onChange={() => this.handleChange()} value={this.state.search}/>
                    <input type="submit" value="Search"/>
                </form>
                {this.state.foundPlants.map(plant => {
                    return(
                        <div key={plant.id}>
                            <div>
                                <img src={plant.image_url} alt={plant.common_name}/>
                            </div>
                            <div>
                                <p>{plant.common_name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Search