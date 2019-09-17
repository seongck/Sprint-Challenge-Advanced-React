import React from 'react';
import Player from './Player';

function PlayerList({ players }) {
  return (
    <section className="playerlist">
      {players.map( player => (
        <Player 
          key={player.id} 
          name={player.name} 
          country={player.country}
          searches={player.searches}
        />
      ))}
    </section>
  )
}

export default PlayerList;
