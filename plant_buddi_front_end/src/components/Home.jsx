import React, { Component } from 'react'


class Home extends Component {

  render() {
    return (
      <div className='main-content'>
        <div className='hero'>
          <img src="https://i.ibb.co/2y8t9HG/IMG-8461.jpg" alt="IMG-8461" border="0" className='hero-image'/>
          <div className='center-hero'>
          <h1 className='hero-header'>Plant Buddi</h1>
          <p className='large-text'>Your Plant Care Tracker</p>
          </div>
        </div>
        <div className='form-content'>
        <h1>What Does Plant Buddi Do?</h1>
        <div className='feature-group'>
          <img src="https://i.ibb.co/w4x4jFC/3df51f155b9083e5facd284384d85c70c7605e8c.jpg" border="0" alt='wild hops' className='feature-image'/>
          <div className='feature-group-text'>
            <h2>Plant Buddi Do Dis</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dictum eros, id bibendum urna maximus at. Aenean sed leo leo. Vestibulum venenatis mi in gravida ornare. Praesent nec magna sed ex dignissim vulputate. Mauris rutrum pretium rhoncus.</p>
          </div>
        </div>
        <div className='feature-group'>
          <div className='feature-group-text'>
            <h2>Plant Buddi Do Dat</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dictum eros, id bibendum urna maximus at. Aenean sed leo leo. Vestibulum venenatis mi in gravida ornare. Praesent nec magna sed ex dignissim vulputate. Mauris rutrum pretium rhoncus.</p>
          </div>
          <img src="https://i.ibb.co/Bcqyh6T/IMG-8264.jpg" alt='red flower' className='feature-image'/>
        </div>
        <div className='feature-group'>
          <img src="https://i.ibb.co/Kjk2ZJV/grape-hyacinths-royalty-free-image-115961090-1544041991.jpg" alt="grape hyacinths" border="0" className='feature-image'/>
          <div className='feature-group-text'>
            <h2>Plant Buddi Do It All</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dictum eros, id bibendum urna maximus at. Aenean sed leo leo. Vestibulum venenatis mi in gravida ornare. Praesent nec magna sed ex dignissim vulputate. Mauris rutrum pretium rhoncus.</p>
          </div>
        </div>
        </div>
      </div>
    )
  }

}       


export default Home;