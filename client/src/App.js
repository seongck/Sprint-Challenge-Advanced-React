import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then( res => res.json())
      .then( data => this.setState({ data: data }))
      .catch( err => console.log( err ))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Women's World Cup June-July 2019</h1>
        </header>
        <PlayerList players={this.state.data} />
      </div>
    );
  }
}

export default App;
