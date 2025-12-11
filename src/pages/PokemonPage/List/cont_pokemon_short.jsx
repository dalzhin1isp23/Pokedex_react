import React from 'react';
import rayquaza from '../../Home/image/rayquaza.png';

export const PokemonShort = () => {
  return (
    <div className="pokemon_cont">
      <div className="pokemon">
        <img src={rayquaza} alt="Rayquaza" className="pokemon" />
      </div>
      <p className="poke_name">Райкваза</p>
      <p className="poke_name">ID 685</p>
    </div>
  );
};  