import React, { useState } from 'react';
import ava from '../pages/User/image/ava.png';
import { NavLink, useNavigate } from 'react-router-dom';
import {NavAdopt} from './NavAdopt';         

export const Header = () => {
  const [isNavAdoptVisible, setIsNavAdoptVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleNavAdopt = () => {
    setIsNavAdoptVisible(!isNavAdoptVisible);
  };

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchQuery.trim()) {
      navigate(`/pokemon/${searchQuery.trim().toLowerCase()}`);
      setSearchQuery(''); 
    }
  };

  return (
    <div className="header">
      <NavLink to="/" className="homer">
        Poke_ru
      </NavLink>

      <form onSubmit={handleSearch} style={{ display: 'inline' }}>
        <input
          type="text"
          className="search"
          placeholder="поиск"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <img
        src={ava}
        alt="Avatar"
        className="ava"
        onClick={toggleNavAdopt}
        style={{ cursor: 'pointer' }}
      />

      <NavAdopt isVisible={isNavAdoptVisible} onClose={toggleNavAdopt} />
    </div>
  );
};