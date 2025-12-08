import React from 'react';
import { NavLink } from 'react-router-dom'; // Импортируем NavLink
import { PokemonShort } from '../components/cont_pokemon_short';
import { ItemShort } from '../components/cont_item';
import bannerMain from '../img/banner_main.png';
import pokemonZag from '../img/pokemon.png';
import itemImg from '../img/item.png';
import locationImg from '../img/location.png';

const Home = () => {
  return (
    <>
      <div className="content">
        
        <div className="banner">
          <img src={bannerMain} alt="PokeRU Banner" className="banner" />
          <p className="zag_ban">Poke_ru</p>
        </div>

       
        <p className="zag">Темы</p>
        <div className="zaaagii">
     
        <NavLink to="/pokemon_list" className="link">
            <img src={pokemonZag} alt="Pokemon" className="image_ssil" />
            <p className="zag_ssil">Покемоны</p>
        </NavLink>

        <NavLink to="/item_list" className="link">
            <img src={itemImg} alt="Items" className="image_ssil" />
            <p className="zag_ssil">Предметы</p>
        </NavLink>

       
        <NavLink to="/map_list" className="link">
            <img src={locationImg} alt="Locations" className="image_ssil" />
            <p className="zag_ssil">Локации</p>
        </NavLink>
        </div>

      
        <p className="zag">10 самых популярных покемонов</p>
        <div className="pokemon-grid">
          {[...Array(10)].map((_, index) => (
            <NavLink to={`/pokemon_list/${index + 1}`} key={`pokemon-${index}`} className="pokemon_cont">
              <PokemonShort />
            </NavLink>
          ))}
        </div>

       
        <p className="zag">10 самых популярных предметов</p>
        <div className="pokemon-grid">
          {[...Array(10)].map((_, index) => (
            <NavLink to={`/item_list/${index + 1}`} key={`item-${index}`} className="item_cont">
              <ItemShort />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;