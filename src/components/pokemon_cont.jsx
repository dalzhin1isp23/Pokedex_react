import React from 'react';
import { getTypeName, getTypeColor } from '../hook/useType'; 

const Pokemon_cont = ({ name, id, image, types = [] }) => {
  
  const getTextColor = (type) => {
    const lightBackgrounds = ['electric', 'dragon', 'bug', 'ground', 'normal', 'steel', 'fairy', 'grass', 'ice'];
    return lightBackgrounds.includes(type) ? '#000' : '#fff';
  };

  const displayName = name
    ? name.charAt(0).toUpperCase() + name.slice(1)
    : '???';

  const displayTypes = types.slice(0, 2);

  return (
    <div
      className="pokemon_cont"
      style={{
        position: 'relative', 
        width: '130px',
        height: '190px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '8px',
        boxSizing: 'border-box',
        textAlign: 'center',
        backgroundColor: '#333',
        borderRadius: '8px',
        margin: '8px',
      }}
    >
      
      <div
        style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#fff',
          zIndex: 1,
        }}
      >
        +
      </div>

      <div className="pokemon" style={{ height: '80px', width: '80px', marginBottom: '8px' }}>
        {image ? (
          <img
            src={image}
            alt={displayName}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#555',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '24px',
            }}
          >
            ?
          </div>
        )}
      </div>

      <p style={{ margin: '4px 0', fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
        {displayName}
      </p>
      <p style={{ margin: '2px 0', fontSize: '12px', color: '#aaa' }}>ID {id}</p>

      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '28px',
          borderRadius: '4px',
          overflow: 'hidden',
          marginTop: '6px',
        }}
      >
        {displayTypes.length === 1 ? (
          <div
            style={{
              backgroundColor: getTypeColor(displayTypes[0]),
              color: getTextColor(displayTypes[0]),
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {getTypeName(displayTypes[0])}
          </div>
        ) : (
          <>
            <div
              style={{
                backgroundColor: getTypeColor(displayTypes[0]),
                color: getTextColor(displayTypes[0]),
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px',
                fontWeight: 'bold',
              }}
            >
              {getTypeName(displayTypes[0])}
            </div>
            <div
              style={{
                backgroundColor: getTypeColor(displayTypes[1]),
                color: getTextColor(displayTypes[1]),
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px',
                fontWeight: 'bold',
              }}
            >
              {getTypeName(displayTypes[1])}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pokemon_cont;