import React, { Component } from 'react';

let baseURL = '';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'heroku URL';
};

class Search extends Component {
    
    render() {
        return (
            <div className='search-container'>
                <div className='plant-item-grid'>
                {this.props.foundPlants.map(plant => {
                    return(
                        <div key={plant.id} className='plant-item'>
                            <div className='plant-item-img'>
                                <img className='card-img' src={plant.image_url} alt={plant.common_name}/>
                            </div>
                            <div>
                                <p>{plant.common_name}</p>
                            </div>
                            <div className='add-button'>
                                <form>
                                    <input type="submit" value="Add Plant"/>
                                </form>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Search