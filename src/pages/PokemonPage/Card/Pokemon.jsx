import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePokemonDetails } from '../../../features/Pokemon/usePokemonDetails';
import { useSelector } from 'react-redux';
import '../../../App.css';
import '../pokemon.css';

const Pokemon = () => {
  const { ident } = useParams();
  const navigate = useNavigate();

  const { data: pokemon, isLoading, isError } = usePokemonDetails(ident);

  const typeMap = useSelector((state) => state.types.typeMap);
  const typeColors = useSelector((state) => state.types.typeColors);

  if (isLoading) {
    return (
      <div className="content" style={{ textAlign: 'center', color: 'white', paddingTop: '50px' }}>
        Загрузка...
      </div>
    );
  }

  if (isError || !pokemon) {
    navigate('/pokemons');
    return null;
  }

  const readableName = pokemon.name
    ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    : '???';

  return (
    <div className="content">
      <button className="but_krosh" onClick={() => navigate(-1)}>
        Назад
      </button>

      <div style={{ width: '100%', height: '500px' }}>
        <h1 className="zagolovok">{readableName}</h1>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '100%',
            position: 'relative',
            top: '90px',
            width: '150px',
            height: '150px',
            margin: '0 auto',
          }}
        >
          <img
            src={
              pokemon.sprites?.front_default ||
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'
            }
            alt={readableName}
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'contain',
            }}
          />
        </div>

        <div
          style={{
            float: 'right',
            position: 'relative',
            height: '150px',
            width: '200px',
            bottom: '200px',
          }}
        >
          <h2 className="zagolovok">Информация</h2>
          <table>
            <tbody>
              <tr>
                <td style={{ color: 'white' }}>№</td>
                <td style={{ color: 'white' }}>#{pokemon.id}</td>
              </tr>
              <tr>
                <td style={{ color: 'white' }}>Тип</td>
                <td style={{ color: 'white' }}>
                  {pokemon.types?.map((t) => {
                    const typeName = typeMap[t.type.name] || t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1);
                    const typeColor = typeColors[t.type.name] || '#888';
                    return (
                      <span key={t.type.name} style={{ color: typeColor, marginRight: '4px' }}>
                        {typeName}
                      </span>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td style={{ color: 'white' }}>Вес</td>
                <td style={{ color: 'white' }}>{(pokemon.weight / 10).toFixed(1)} кг</td>
              </tr>
              <tr>
                <td style={{ color: 'white' }}>Рост</td>
                <td style={{ color: 'white' }}>{(pokemon.height / 10).toFixed(1)} м</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ width: '100%', height: '200px', marginTop: '20px' }}>
        <h1 className="zagolovok">Способности</h1>
        <table style={{ width: '100%' }}>
          <tbody>
            {pokemon.abilities?.map((slot, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    color: 'white',
                    borderRight: '1px solid white',
                    borderTop: idx === 0 ? '1px solid white' : 'none',
                  }}
                >
                  {slot.ability?.name
                    ? slot.ability.name.charAt(0).toUpperCase() + slot.ability.name.slice(1)
                    : '—'}
                </td>
                <td style={{ color: 'white', borderTop: idx === 0 ? '1px solid white' : 'none' }}>
                  {slot.is_hidden ? 'Скрытая способность' : 'Обычная'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
        <h1 className="zagolovok">Базовые характеристики</h1>
        <table style={{ width: '100%' }}>
          <tbody>
            {pokemon.stats?.map((stat, idx) => {
              const statName = stat.stat?.name || 'unknown';
              const displayName = {
                hp: 'Здоровье',
                attack: 'Атака',
                defense: 'Защита',
                'special-attack': 'Спец.Атака',
                'special-defense': 'Спец.Защита',
                speed: 'Скорость',
              }[statName] || statName;

              const colorMap = {
                hp: '#15B63C',
                attack: '#E33737',
                defense: '#3760E3',
                'special-attack': '#E39637',
                'special-defense': '#6637E3',
                speed: '#D1E337',
              };
              const color = colorMap[statName] || '#888';
              const percent = Math.min(100, (stat.base_stat / 255) * 100);

              return (
                <tr key={statName}>
                  <td
                    style={{
                      color: 'white',
                      borderRight: '1px solid white',
                      ...(idx === 0 ? { borderTop: '1px solid white' } : {}),
                    }}
                  >
                    {displayName}
                  </td>
                  <td
                    style={{
                      color: 'white',
                      ...(idx === 0 ? { borderTop: '1px solid white' } : {}),
                      background: `linear-gradient(90deg, ${color} ${percent}%, #3D3D3D ${percent}%)`,
                    }}
                  >
                    {stat.base_stat}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h1 className="zagolovok">Приёмы</h1>
      <div style={{ width: '100%', color: 'white' }}>
        {pokemon.moves?.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Нет приёмов</p>
        ) : (
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              tableLayout: 'fixed',
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: '8px', border: '1px solid white', color: 'white' }}>Название</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.moves.slice(0, 30).map((move, idx) => {
                const moveName = move.move?.name || '—';
                return (
                  <tr key={idx}>
                    <td style={{ padding: '8px', border: '1px solid white', textAlign: 'center' }}>
                      {moveName.charAt(0).toUpperCase() + moveName.slice(1)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <h1 className="zagolovok">Эволюции</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '16px',
          border: '1px solid white',
          borderRadius: '12px',
          margin: '10px 0',
        }}
      >
        {pokemon.evolutionChain?.map((evo, idx) => (
          <React.Fragment key={evo.id || idx}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evo.id}.png`}
                alt={evo.name}
                style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                onError={(e) => {
                  e.target.src =
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
                }}
              />
              <div style={{ color: 'white', marginTop: '6px' }}>
                {evo.name
                  ? evo.name.charAt(0).toUpperCase() + evo.name.slice(1)
                  : '—'}
              </div>
            </div>
            {idx < (pokemon.evolutionChain?.length || 0) - 1 && (
              <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;