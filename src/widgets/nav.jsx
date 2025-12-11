import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { pokemonService, typeService } from '../api/useApi'; 

const PokemonPerPage = 48;


const fetchAllPokemonsPage = async (page = 1) => {
  const offset = (page - 1) * PokemonPerPage;
  const list = await pokemonService.getAll({
    limit: PokemonPerPage,
    offset,
  });

  const details = await Promise.all(
    list.results.map(async (p) => {
      const id = Number(p.url.split('/').filter(Boolean).pop());
      return pokemonService.getById(id);
    })
  );
  return { results: details, count: list.count };
};

export const Navigation = () => {
  const queryClient = useQueryClient();

  const preloadPokemonData = () => {
    const queryKey = ['pokemons', 1];

    queryClient.prefetchQuery({
      queryKey,
      queryFn: () => fetchAllPokemonsPage(1),
    });
  };

  const handleMouseEnter = (path) => {
    console.log(`Preloading data for: ${path}`);
    if (path === '/pokemons') {
      preloadPokemonData();
    }
  };

  return (
    <div className="nav">
      <NavLink
        to="/pokemons"
        className={({ isActive }) =>
          isActive ? 'router active' : 'router'
        }
        onMouseEnter={() => handleMouseEnter('/pokemons')}
      >
        Покемоны
      </NavLink>

      <NavLink
        to="/item_list"
        className={({ isActive }) =>
          isActive ? 'router active' : 'router'
        }
        style={{ borderWidth: '0px' }}
      >
        Предметы
      </NavLink>

      <NavLink
        to="/map_list"
        className={({ isActive }) =>
          isActive ? 'router active' : 'router'
        }
      >
        Локации
      </NavLink>
    </div>
  );
};