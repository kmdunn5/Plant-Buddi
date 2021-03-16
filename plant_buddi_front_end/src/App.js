import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        plants: []
      }
    }
    render() {
      return (
        <div className="App">
          <h1>Plant Buddi</h1>
        </div>
  );
}
}

export default App;
