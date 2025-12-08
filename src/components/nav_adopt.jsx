import React from 'react';
import { NavLink } from 'react-router-dom';
import ava from '../img/ava.png';
import { AuthContext } from '../context/AuthContext'; 

export const NavAdopt = ({ isVisible, onClose }) => {
  const { isLoggedIn, username, logout } = React.useContext(AuthContext); 

  return (
    <div className="nav_adopt" style={{ display: isVisible ? 'block' : 'none' }}>
   
      <img
        src={ava}
        alt="Avatar"
        className="ava"
        onClick={onClose} 
        style={{ cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%' }}
      />

     
      <div style={{ marginTop: '10px' }}>
        {isLoggedIn ? (
          <>
          
            <NavLink to="/LK" className="nav_adopt_text">
              {username}
            </NavLink>

        
            <NavLink
              to="/pokemon_list"
              className="nav_adopt_text"
              style={({ isActive }) => ({
             
                textDecoration: 'none',
                color: isActive ? '#e3b200' : '#fff',
                display: 'block',
                marginTop: '10px',
              })}
            >
              Покемоны
            </NavLink>

            <NavLink
              to="/map_list"
              className="nav_adopt_text"
              style={({ isActive }) => ({
               
                textDecoration: 'none',
                color: isActive ? '#e3b200' : '#fff',
                display: 'block',
                marginTop: '10px',
              })}
            >
              Локации
            </NavLink>

            <NavLink
              to="/item_list"
              className="nav_adopt_text"
              style={({ isActive }) => ({

                textDecoration: 'none',
                color: isActive ? '#e3b200' : '#fff',
                display: 'block',
                marginTop: '10px',
              })}
            >
              Предметы
            </NavLink>

           
            <p
              className="nav_adopt_text"
              style={{
                color: '#fff',
                cursor: 'pointer',
                display: 'block',
                marginTop: '10px',
              }}
              onClick={logout}
            >
              Выйти
            </p>
          </>
        ) : (
          <>
           
            <NavLink
              to="/lk"
              className="nav_adopt_text"
              style={({ isActive }) => ({
                
                textDecoration: 'none',
                color: isActive ? '#e3b200' : '#fff',
              })}
            >
              Войти
            </NavLink>

            <NavLink
              to="/author"
              className="nav_adopt_text"
              style={({ isActive }) => ({
               
                textDecoration: 'none',
                color: isActive ? '#e3b200' : '#fff',
                display: 'block',
                marginTop: '10px',
              })}
            >
              Регистрация
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavAdopt;