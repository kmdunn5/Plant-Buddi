import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foundPlants: [],
            search: ''
        }
    }
    handleChange = () => {
        
    }
    
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='search'>Plant Name: </label>
                    <input type="text" name='search' id='search' value={this.state.search}/>
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