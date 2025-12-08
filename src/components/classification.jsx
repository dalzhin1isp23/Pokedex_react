import React from 'react';

const Classification = ({ onTypeClick }) => {
  const pokemonTypes = [
    { name: 'Травяной', image: require('../img/32px-GrassType..png'), apiName: 'grass' },
    { name: 'Электрический', image: require('../img/alec.png'), apiName: 'electric' },
    { name: 'Жучий', image: require('../img/bug.png'), apiName: 'bug' },
    { name: 'Тёмный', image: require('../img/dark.png'), apiName: 'dark' },
    { name: 'Драконий', image: require('../img/dragon.png'), apiName: 'dragon' },
    { name: 'Сказочный', image: require('../img/fairy.png'), apiName: 'fairy' },
    { name: 'Боевой', image: require('../img/fighter.png'), apiName: 'fighting' },
    { name: 'Огненный', image: require('../img/fire.png'), apiName: 'fire' },
    { name: 'Воздушный', image: require('../img/fly.png'), apiName: 'flying' },
    { name: 'Призрачный', image: require('../img/ghost.png'), apiName: 'ghost' },
    { name: 'Земляной', image: require('../img/ground.png'), apiName: 'ground' },
    { name: 'Ледяной', image: require('../img/ice.png'), apiName: 'ice' },
    { name: 'Нормальный', image: require('../img/normal.png'), apiName: 'normal' },
    { name: 'Психический', image: require('../img/psychic.png'), apiName: 'psychic' },
    { name: 'Ядовитый', image: require('../img/poison_type.png'), apiName: 'poison' },
  ];

  return (
    <div style={{ width: '100%', backgroundColor: '#3d3d3d', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pokemonTypes.map((type, index) => (
        <div
          key={index}
          className="pokemon_cont"
          onClick={() => onTypeClick(type.apiName)} 
          style={{ cursor: 'pointer' }}
        >
          <div className="pokemon">
            <img src={type.image} alt={type.name} className="pokemon" />
          </div>
          <p className="poke_name">{type.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Classification;