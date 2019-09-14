import React from 'react';

function Player({ name, country, searches }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{country}</p>
      <p>{searches}</p>
    </div>
  );
}

export default Player;
