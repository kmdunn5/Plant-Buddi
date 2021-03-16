import React, { Component } from 'react';

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
        fetch('https://trefle.io/api/v1/plants?token=h3BUvEszyxEYn8KbbVH31pgzKkRprttDHEkW177_73A&filter[common_name]=' + searchParam)
        .then(data => { return data.json() }, err => console.log(err))
        .then(parsedData => console.log(parsedData), err => console.log(err));
    }
    
    render() {
        return (
            <div className='search-container'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='search'>Search for a Plant Buddi: </label>
                    <input type="text" name='search' id='search' placeholder="Enter Your Plant's Type" onChange={this.handleChange} value={this.state.search}/>
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