import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
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
        <Navbar />
        <PlayerList players={this.state.data} />
      </div>
    );
  }
}

export default App;
