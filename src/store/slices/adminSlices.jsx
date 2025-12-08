
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonService } from '../../hook/useApi'; 

const createDefaultStats = () => [
  { base_stat: 50, effort: 0, stat: { name: 'hp' } },
  { base_stat: 55, effort: 0, stat: { name: 'attack' } },
  { base_stat: 50, effort: 0, stat: { name: 'defense' } },
  { base_stat: 50, effort: 0, stat: { name: 'special-attack' } },
  { base_stat: 50, effort: 0, stat: { name: 'special-defense' } },
  { base_stat: 50, effort: 0, stat: { name: 'speed' } },
];

const createDefaultAbilities = (name) => [
  { ability: { name: 'custom' }, is_hidden: false, slot: 1 },
  { ability: { name: 'custom-hidden' }, is_hidden: true, slot: 3 },
];

const createDefaultMoves = () => [
  { move: { name: 'tackle' }, version_group_details: [] },
];


export const createPokemonThunk = createAsyncThunk(
  'admin/createPokemon',
  async (pokemonName, { rejectWithValue }) => {
    try {
      const name = pokemonName.trim().toLowerCase();
      const all = await pokemonService.getAll();
      const maxId = all.reduce((max, p) => {
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
        cries: {
          latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/0.ogg',
          legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/0.ogg',
        },
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png',
          other: {
            'official-artwork': {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/0.png',
            },
            home: {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/0.png',
            },
          },
        },
        types: [{ slot: 1, type: { name: 'custom', url: 'https://pokeapi.co/api/v2/type/0/' } }],
        stats: createDefaultStats(),
        abilities: createDefaultAbilities(name),
        moves: createDefaultMoves(),
        game_indices: [],
        held_items: [],
        past_abilities: [],
        past_types: [],
        location_area_encounters: `https://pokeapi.co/api/v2/pokemon/${newId}/encounters`,
      };

      await pokemonService.create(newPokemon);
      return newPokemon;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Ошибка создания покемона');
    }
  }
);

export const updateSpriteThunk = createAsyncThunk(
  'admin/updateSprite',
  async ({ id, spriteUrl }, { rejectWithValue }) => {
    try {
      const current = await pokemonService.getById(id);
      const updated = { ...current, sprites: { ...current.sprites, front_default: spriteUrl } };
      await pokemonService.update(id, updated);
      return { id, spriteUrl };
    } catch (err) {
      return rejectWithValue('Не удалось обновить спрайт');
    }
  }
);

export const deletePokemonThunk = createAsyncThunk(
  'admin/deletePokemon',
  async (id, { rejectWithValue }) => {
    try {
      await pokemonService.delete(id);
      return id;
    } catch (err) {
      return rejectWithValue('Не удалось удалить покемона');
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  currentName: '',
  spriteUrl: '',
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setName: (state, action) => {
        state.currentName = action.payload;
    },
    setSpriteUrl: (state, action) => {
        state.spriteUrl = action.payload;
    },
    clearForm: () => initialState,
    clearError: (state) => {
        state.error = null;
    },
   setLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    setError: (state, action) => {
        state.error = action.payload;
    },
},
  extraReducers: (builder) => {
    builder
      .addCase(createPokemonThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPokemonThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.currentName = '';
        state.spriteUrl = '';
      })
      .addCase(createPokemonThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setName, setSpriteUrl, clearForm, clearError } = adminSlice.actions;
export default adminSlice.reducer;