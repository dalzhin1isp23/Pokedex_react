import React from 'react';
import beastBall from '../img/beast_ball.png';

export const ItemShort = () => {
  return (
    <div className="pokemon_cont">
      <div className="pokemon">
        <img src={beastBall} alt="Beast Ball" className="pokemon" />
      </div>
      <p className="poke_name">Бистбол</p>
    </div>
  );
};