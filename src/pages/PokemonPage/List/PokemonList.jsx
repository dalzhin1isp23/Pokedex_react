import React from 'react';
import { NavLink, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import '../../../App.css';
import bannerPoke from '../image/banner_poke.png';
import arrow from '../image/arrow.png';
import Pokemon_cont from './PokemonCont';
import Classification from '../classification';
import Pagination from '../../../widgets/Pagination';
import { usePokemons } from '../../../features/Pokemon/usePokemons';

const Pokemon_list = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams()


  
  const {
    pokemonData,
    isLoading,
    isError,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePokemons(searchParams.get('type'));

  const handleTypeClick = (apiName) => {
    navigate(apiName ? `/pokemons?type=${apiName}` : '/pokemons');
  };

  const handlePageChange = (page) => setCurrentPage(page);

  if (isError) return <div className="content" style={{ color: 'red', textAlign: 'center' }}>Ошибка загрузки</div>;

  return (
    <div className="content">
      <div className="banner">
        <img src={bannerPoke} alt="Poke Banner" className="banner" />
        <p className="zag_ban">Poke_ru</p>
      </div>

      <p className="zag">Типы</p>
      <Classification onTypeClick={handleTypeClick} />

      <div className="gran_fut"></div>
      <img src={arrow} alt="Arrow" className="arrow" />

      {isLoading ? (
        <div className="content" style={{ color: 'white', textAlign: 'center' }}>Загрузка списка...</div>
      ) : (
        <>
          <div
            style={{
              width: '100%',
              backgroundColor: '#3d3d3d',
              padding: '10px 0',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {pokemonData?.results.map((pokemon) => (
              <NavLink
                key={pokemon.id}
                to={`/pokemon/${pokemon.id}`}
                style={{ textDecoration: 'none' }}
                
              >
                <Pokemon_cont
                  name={pokemon.name}
                  id={pokemon.id}
                  image={pokemon.sprites?.front_default}
                  types={pokemon.types.map((t) => t.type.name)}
                />
              </NavLink>
            ))}
          </div>

          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Pokemon_list;