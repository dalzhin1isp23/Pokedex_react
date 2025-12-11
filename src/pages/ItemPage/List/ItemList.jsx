import React from 'react';
import '../../../App.css';
import { NavLink } from 'react-router-dom'; 

import bannerMain from '../image/item_banner.png';
import pokebol from '../image/pokebol.png';
import fruit from '../image/fruit.png';
import egg from '../image/egg.png';
import all from '../image/all.png';
import tm from '../../Home/image/tm.png';

import arrow from '../image/arrow.png';
import { Cont } from './ItemCont';

const ItemList = () => {
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

export default ItemList;