import { useQuery } from '@tanstack/react-query';
import { pokemonService, evolutionChainService } from './useApi';

const extractEvolutionChain = (chainNode) => {
  if (!chainNode || !chainNode.species) return [];

  const urlParts = chainNode.species.url.split('/');
  const id = parseInt(urlParts[urlParts.length - 2], 10);
  

  const current = {
    id,
    name: chainNode.species.name,
  };

  const evolvesTo = chainNode.evolves_to.flatMap((next) =>
    extractEvolutionChain(next)
  );

  return [current, ...evolvesTo];
};

export const usePokemonDetails = (indent) => {
  return useQuery({
    queryKey: ['pokemonDetails', indent],
    queryFn: async () => {
      let pokemon;

      
      const isId = /^\d+$/.test(indent);

      if (isId) {
        pokemon = await pokemonService.getById(Number(indent));
      } else {
        pokemon = await pokemonService.getByName(indent.toLowerCase());
      }

      if (!pokemon) throw new Error('Pokemon not found');

      let evolutionChain = [];
      try {
      
        const response = await evolutionChainService.getWithParams({ pokemonId: pokemon.id });
        if (Array.isArray(response) && response.length > 0) {
          evolutionChain = response[0].chain || [];
        }
      } catch (err) {
        console.warn(`Evolution chain not found for ID ${pokemon.id}:`, err.message);
      }

      return { ...pokemon, evolutionChain };
    },
    enabled: !!indent,
  });
};