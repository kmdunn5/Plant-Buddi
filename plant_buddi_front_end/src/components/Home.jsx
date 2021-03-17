import React, { Component } from 'react'


class Home extends Component {

  render() {
    return (
      <div className='main-content'>
        <div className='hero'>
          <h1 className='hero-header'>Plant Buddi</h1>
          <p className='large-text'>An app to help you track your planet friends</p>
        </div>
        <div className='form-content'>
        <h1>What Plant Buddi Does</h1>
        <div className='feature-group'>
          <img src='https://via.placeholder.com/480x200?text=Product+Screenshot' alt='Placeholder' />
          <div className='feature-group-text'>
            <h2>Feature 1 Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dictum eros, id bibendum urna maximus at. Aenean sed leo leo. Vestibulum venenatis mi in gravida ornare. Praesent nec magna sed ex dignissim vulputate. Mauris rutrum pretium rhoncus.</p>
          </div>
        </div>
        <div className='feature-group'>
          <div className='feature-group-text'>
            <h2>Feature 2 Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dictum eros, id bibendum urna maximus at. Aenean sed leo leo. Vestibulum venenatis mi in gravida ornare. Praesent nec magna sed ex dignissim vulputate. Mauris rutrum pretium rhoncus.</p>
          </div>
          <img src='https://via.placeholder.com/480x200?text=Product+Screenshot' alt='Placeholder' />
        </div>
        </div>
      </div>
    )
  }

}       


export default Home;