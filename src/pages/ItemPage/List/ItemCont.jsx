import React from 'react';
import beastBall from '../image/beast_ball.png';

export const Cont = ({ index }) => {
  return (
    <div className="pokemon_cont" key={`item-${index}`}>
      <p className="plus">+</p>
      <div className="pokemon">
        <img src={beastBall} alt="Beast Ball" className="pokemon" style={{ position: 'relative', bottom: '12px' }} />
      </div>
      <p className="poke_name">Бист болл</p>
    </div>
  );
};