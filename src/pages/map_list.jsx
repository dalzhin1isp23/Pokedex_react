import React from 'react';
import '../App.css'; 
import mapBanner from '../img/map_banner.png'; 
import { NavLink } from 'react-router-dom'; 
import Map_cont from '../components/map_cont';

const Map_list = () => {
  return (
    <div className="content">

      <div className="banner">
        <img src={mapBanner} alt="Map Banner" className="banner" />
        <p className="zag_ban">Poke_ru</p>
      </div>


      <div
        style={{
          width: '100%',
          backgroundColor: '#3d3d3d',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[...Array(7)].map((_, index) => (
          <NavLink to="/map_list/map">
            <Map_cont />
          </NavLink>
      
        ))}
      </div>
    </div>
  );
};

export default Map_list;