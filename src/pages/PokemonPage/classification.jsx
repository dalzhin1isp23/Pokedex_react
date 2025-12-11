import React from 'react';

const Classification = ({ onTypeClick }) => {
  const pokemonTypes = [
    { name: 'Травяной', image: require('./image/32px-GrassType..png'), apiName: 'grass' },
    { name: 'Электрический', image: require('./image/alec.png'), apiName: 'electric' },
    { name: 'Жучий', image: require('./image/bug.png'), apiName: 'bug' },
    { name: 'Тёмный', image: require('./image/dark.png'), apiName: 'dark' },
    { name: 'Драконий', image: require('./image/dragon.png'), apiName: 'dragon' },
    { name: 'Сказочный', image: require('./image/fairy.png'), apiName: 'fairy' },
    { name: 'Боевой', image: require('./image/fighter.png'), apiName: 'fighting' },
    { name: 'Огненный', image: require('./image/fire.png'), apiName: 'fire' },
    { name: 'Воздушный', image: require('./image/fly.png'), apiName: 'flying' },
    { name: 'Призрачный', image: require('./image/ghost.png'), apiName: 'ghost' },
    { name: 'Земляной', image: require('./image/ground.png'), apiName: 'ground' },
    { name: 'Ледяной', image: require('./image/ice.png'), apiName: 'ice' },
    { name: 'Нормальный', image: require('./image/normal.png'), apiName: 'normal' },
    { name: 'Психический', image: require('./image/psychic.png'), apiName: 'psychic' },
    { name: 'Ядовитый', image: require('./image/poison_type.png'), apiName: 'poison' },
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