import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Women's World Cup June-July 2019</h1>
        </header>
      </div>
    );
  }
}

export default App;
