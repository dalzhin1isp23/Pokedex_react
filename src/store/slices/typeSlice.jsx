import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  typeMap: {
    normal: 'Нормальный',
    fire: 'Огненный',
    water: 'Водный',
    electric: 'Электрический',
    grass: 'Травяной',
    ice: 'Ледяной',
    fighting: 'Боевой',
    poison: 'Ядовитый',
    ground: 'Земляной',
    flying: 'Воздушный',
    psychic: 'Психический',
    bug: 'Жучий',
    rock: 'Каменный',
    ghost: 'Призрачный',
    dragon: 'Драконий',
    dark: 'Тёмный',
    steel: 'Стальной',
    fairy: 'Сказочный',
    unknown: 'Неизвестный',
    shadow: 'Теневой',
  },
  typeColors: {
    normal: '#A8A878',
    fire: '#F57D31',
    water: '#6493EB',
    electric: '#F9CF30',
    grass: '#74CB48',
    ice: '#9AD6DF',
    fighting: '#C12239',
    poison: '#A43E9F',
    ground: '#DEC17B',
    flying: '#A98FF0',
    psychic: '#FA5882',
    bug: '#A7B723',
    rock: '#B8A137',
    ghost: '#6D599F',
    dragon: '#7037FF',
    dark: '#6F5848',
    steel: '#B7B9D0',
    fairy: '#E69EAC',
  },
};

const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {},
});

export const selectTypeName = (state, typeKey) => {
  return state.types.typeMap[typeKey] || typeKey.charAt(0).toUpperCase() + typeKey.slice(1);
};

export const selectTypeColor = (state, typeKey) => {
  return state.types.typeColors[typeKey] || '#888';
};

export default typesSlice.reducer;