import React from 'react';
import Player from './Player';

function PlayerList({ players }) {
  return (
    players.map( player => (
      <Player 
        key={player.id} 
        name={player.name} 
        country={player.country}
        searches={player.searches}
      />
    )) 
  );
}

export default PlayerList;
