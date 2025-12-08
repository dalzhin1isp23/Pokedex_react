import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'; 

import bannerMain from '../img/item_banner.png';
import pokebol from '../img/pokebol.png';
import fruit from '../img/fruit.png';
import egg from '../img/egg.png';
import all from '../img/all.png';
import tm from '../img/tm.png';

import arrow from '../img/arrow.png';
import { Cont } from '../components/item_cont';

const Item_list = () => {
  return (
    <div className="content">
    
      <div className="banner">
        <img src={bannerMain} alt="Banner" className="banner" />
        <p className="zag_ban">Poke_ru</p>
      </div>

     
      <p className="zag">Типы</p>
      <div className="types-grid">
     
        <div className="pokemon_cont">
          <div className="pokemon">
            <img src={pokebol} alt="Pokebol" className="pokemon" style={{ borderRadius: '20px' }} />
          </div>
          <p className="poke_name">Покеболы</p>
        </div>

    
        <div className="pokemon_cont">
          <div className="pokemon">
            <img src={fruit} alt="Fruit" className="pokemon" style={{ borderRadius: '20px' }} />
          </div>
          <p className="poke_name">Фрукты</p>
        </div>

        <div to="/item_list/egg" className="pokemon_cont">
          <div className="pokemon">
            <img src={egg} alt="Egg" className="pokemon" style={{ borderRadius: '20px' }} />
          </div>
          <p className="poke_name">Яйца</p>
        </div>

   
        <div to="/item_list/all" className="pokemon_cont">
          <div className="pokemon">
            <img src={all} alt="All" className="pokemon" style={{ borderRadius: '20px' }} />
          </div>
          <p className="poke_name">Остальное</p>
        </div>


        <div to="/item_list/tm" className="pokemon_cont">
          <div className="pokemon">
            <img src={tm} alt="TM" className="pokemon" style={{ borderRadius: '20px' }} />
          </div>
          <p className="poke_name">Приёмы</p>
        </div>

       
        <img src={arrow} alt="Arrow" className="arrow" />
      </div>

 
      <div className="items-grid">
        {[...Array(20)].map((_, index) => (
          <NavLink to={`/item_list/${index + 1}`} >
            <Cont />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Item_list;