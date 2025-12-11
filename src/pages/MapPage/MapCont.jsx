import React from 'react';
import map_img from './image/jonto.png'; 
const Map_cont = () => {
  return (
    <div className="map">
      <img src={map_img}  className="img_map" />
      <p
        style={{
          color: 'white',
          fontFamily: 'Comfortaa, sans-serif',
          margin: '5px 0 0 0',
        }}
      >
        Джонто
      </p>
    </div>
  );
};

export default Map_cont;