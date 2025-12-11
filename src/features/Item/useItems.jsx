import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { pokemonService } from '../../api/useApiuseApi';

let fullPokemonList = null;

export const usePokemons = (typeFromUrl = null) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 48;
  const queryClient = useQueryClient();

  useEffect(() => {
    setCurrentPage(1);
  }, [typeFromUrl]);

  const handleMouseEnter = (id) => {
    queryClient.prefetchQuery({
      queryKey: ['pokemonDetails', id],
      queryFn: () => pokemonService.getById(id),
    });
  };

  const {
    data: Itemdata,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['pokemons', currentPage],
    queryFn: async () => {
   
      if (!fullPokemonList) {
        fullPokemonList = await pokemonService.getAll();
      }

      const start = (currentPage - 1) * pokemonsPerPage;
      const pageData = fullPokemonList.slice(start, start + pokemonsPerPage);

      return {
        results: pageData,
        count: fullPokemonList.length,
      };
    },
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  const totalPages = pokemonData ? Math.ceil(pokemonData.count / pokemonsPerPage) : 0;

  return {
    pokemonData,
    isLoading,
    isError,
    selectedType: typeFromUrl,
    currentPage,
    totalPages,
    setCurrentPage,
    handleMouseEnter,
  };
};