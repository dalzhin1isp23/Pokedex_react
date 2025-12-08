import React, { useContext } from 'react';
import '../App.css';
import '../css/lk.css';
import Pokemon_cont from '../components/pokemon_cont';
import Command from '../components/command';
import ava from '../img/ava.png';
import { AuthContext } from '../context/AuthContext';

const LK = () => {
  const { isLoggedIn, username } = useContext(AuthContext); 
  const [activeTab, setActiveTab] = React.useState('favorite');


  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="content">
   
      <div className="lk_face">
        <img src={ava} alt="Avatar" className="ava_lk" />
        <div className="lk_face_text">
          {isLoggedIn ? (
            <>
              <h3 style={{ color: 'white' }}>{username}</h3>
              <h3 style={{ color: 'white' }}>ID: 1</h3>
            </>
          ) : (
            <h3 style={{ color: 'white' }}>Гость</h3>
          )}
        </div>
      </div>

      <div className="nav_lk">
        <button
          className="nav_but_lk"
          style={{
            borderWidth: '0px 1px 0px 0px',
            float: 'left',
            backgroundColor: activeTab === 'favorite' ? '#3d3d3d' : 'transparent',
          }}
          onClick={() => switchTab('favorite')}
        >
          Избранное
        </button>
        <button
          className="nav_but_lk"
          style={{
            borderWidth: '0px 0px 0px 1px',
            float: 'left',
            backgroundColor: activeTab === 'command' ? '#3d3d3d' : 'transparent',
          }}
          onClick={() => switchTab('command')}
        >
          Команды
        </button>
      </div>


      <div className="gran_fut" style={{ bottom: '30px', position: 'relative' }}></div>


      {activeTab === 'favorite' && (
        <div className='favorite'>
          <Pokemon_cont />
        </div>
      )}
      {activeTab === 'command' && (
        <div className="comand_list">
          <Command />
        </div>
      )}
    </div>
  );
};

export default LK;