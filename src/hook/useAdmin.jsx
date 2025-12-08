  import { useMutation, useQueryClient } from '@tanstack/react-query';
  import { pokemonService } from './useApi';


  const createDefaultStats = () => [
    { base_stat: 50, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
    { base_stat: 55, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
    { base_stat: 50, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
    { base_stat: 50, effort: 0, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
    { base_stat: 50, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
    { base_stat: 50, effort: 0, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } },
  ];

  const createDefaultAbilities = (name) => [
    {
      ability: { name: 'custom', url: 'https://pokeapi.co/api/v2/ability/0/' },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: { name: 'custom-hidden', url: 'https://pokeapi.co/api/v2/ability/1/' },
      is_hidden: true,
      slot: 3,
    },
  ];

  const createDefaultMoves = () => [
    {
      move: { name: 'tackle', url: 'https://pokeapi.co/api/v2/move/33/' },
      version_group_details: [],
    },
  ];

  export const useAdminMutations = () => {
    const queryClient = useQueryClient();

    const fetchAllPokemon = async () => {
      return await pokemonService.getAll();
    };

    const createMutation = useMutation({
      mutationFn: async (pokemonName) => {
        const name = pokemonName.trim().toLowerCase();
        const allPokemon = await fetchAllPokemon();

        const maxId = allPokemon.reduce((max, p) => {
          const numId = parseInt(p.id, 10) || 0;
          return Math.max(max, numId);
        }, 0);
        const newId = String(maxId + 1);

        const newPokemon = {
          id: newId,
          name,
          base_experience: 100,
          height: 10,
          weight: 100,
          order: maxId + 1,
          is_default: true,
          species: { name, url: `https://pokeapi.co/api/v2/pokemon-species/${newId}/` },
          forms: [{ name, url: `https://pokeapi.co/api/v2/pokemon-form/${newId}/` }],
          game_indices: [],
          held_items: [],
          location_area_encounters: `https://pokeapi.co/api/v2/pokemon/${newId}/encounters`,
          cries: {
            latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/0.ogg',
            legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/0.ogg',
          },
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png',
            back_default: null,
            front_shiny: null,
            back_shiny: null,
            other: {
              'official-artwork': {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/0.png',
                front_shiny: null,
              },
              home: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/0.png',
                front_shiny: null,
              },
            },
          },
          types: [
            {
              slot: 1,
              type: { name: 'custom', url: 'https://pokeapi.co/api/v2/type/0/' },
            },
          ],

          stats: createDefaultStats(),
          abilities: createDefaultAbilities(name),
          moves: createDefaultMoves(),
          past_abilities: [],
          past_types: [],
        };

        return pokemonService.create(newPokemon);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['pokemons'] });
        queryClient.invalidateQueries({ queryKey: ['pokemonList'] });
        alert(' Покемон добавлен!');
      },
      onError: (error) => {
        console.error('Ошибка создания покемона:', error);
        alert(
          ' Не удалось добавить покемона: ' +
            (error.response?.data?.message || error.message || 'Неизвестная ошибка')
        );
      },
    });

    const updateMutation = useMutation({
      mutationFn: async ({ id, spriteUrl }) => {
        const current = await pokemonService.getById(id);

        const updatedSprites = {
          ...current.sprites,
          front_default: spriteUrl,
          other: {
            ...current.sprites?.other,
            'official-artwork': {
              ...current.sprites?.other?.['official-artwork'],
              front_default: spriteUrl,
            },
            home: {
              ...current.sprites?.other?.home,
              front_default: spriteUrl,
            },
          },
        };

        return pokemonService.update(id, { ...current, sprites: updatedSprites });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['pokemons'] });
        queryClient.invalidateQueries({ queryKey: ['pokemonDetails'] });
        alert('Спрайт обновлён!');
      },
      onError: (error) => {
        console.error('Ошибка обновления спрайта:', error);
        alert(' Не удалось обновить спрайт');
      },
    });

    const deleteMutation = useMutation({
      onMutate: async (id) => {
        await queryClient.cancelQueries({ queryKey: ['pokemons'] });
        const previousData = queryClient.getQueryData(['pokemons']);
        queryClient.setQueryData(['pokemons'], (old) => {
          if (!old) return old;
          return {
            ...old,
            results: old.results.filter((p) => p.id !== id),
            count: Math.max(0, (old.count || 0) - 1),
          };
        });
        return { previousData };
      },
      mutationFn: (id) => pokemonService.delete(id),
      onError: (error, id, context) => {
        queryClient.setQueryData(['pokemons'], context.previousData);
        alert('Удаление отменено — данные восстановлены');
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['pokemons'] });
      },
    });

    return { createMutation, updateMutation, deleteMutation };
  };