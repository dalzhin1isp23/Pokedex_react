import React from 'react';
import '../App.css'; 
import '../css/map.css';
import jonto from '../img/jonto.png'; 
import ouk from '../img/ouk.png';
import forKanto from '../img/for_kanto.png';
import pokemonBlue from '../img/pokemon_blue.png';
import pokemonGreen from '../img/pokemon_green.png';
import pokemonYellow from '../img/pokemon_yellow.png';
import pokemonRed from '../img/pokemon_red.png';

const Map = () => {
  return (
    <div className="content">
 
      <h1 style={{ fontFamily: 'Comfortaa, sans-serif', color: 'white', marginTop: '30px' }}>
        Канто
      </h1>
      <img src={jonto} alt="Канто" className="img_map" style={{ right: '20px', position: 'relative' }} />
      <div style={{ width: '100%', maxWidth: '600px', color: 'white', fontFamily: 'Comfortaa, sans-serif' }}>
        Канто (яп., англ. Kanto) — это самый первый регион во вселенной Покемон. Впервые регион Канто встречается в играх Pokemon: Red, Blue и Yellow, а в аниме в 1 сезоне. В других играх тоже можно посетить Канто с условием что Элитная Четвёрка была побеждена, а также в их переизданиях Pokémon FireRed and LeafGreen.
        <br />
        Как и большинства регионов названия городов происходят от чего-то. В Канто названия большинства городов происходят от цветов. Региональным профессором является Профессор Оук он живёт в Палет Тауне.
      </div>

 
      <div style={{ width: '100%', maxWidth: '600px', color: 'white', fontFamily: 'Comfortaa, sans-serif', marginTop: '50px' }}>
        <h1 style={{ fontFamily: 'Comfortaa, sans-serif', color: 'white', marginTop: '30px', marginBottom: '50px' }}>
          Профессор Оук
        </h1>
        <img src={ouk} alt="Профессор Оук" />
        <div style={{ color: 'white', width: '40%', position: 'relative', float: 'right', marginTop: '100px' }}>
          Профессор Оук сам лично придумал покедекс, создать который ему помог Уильям Пятый. Живёт он в Паллет-Тауне и сам лично выдаёт начинающим тренерам их первых покемонов и покедекс.
        </div>
      </div>


      <div style={{ width: '100%', maxWidth: '600px', color: 'white', fontFamily: 'Comfortaa, sans-serif', marginTop: '50px' }}>
        <img src={forKanto} alt="Элитная четвёрка" className="img_map" />
        <p style={{ lineHeight: '30px' }}>
          Лорелей — специалист по ледяным покемонам.
          <br />
          Бруно — специалист по боевым покемонам.
          <br />
          Агата — специалист по покемонам-призракам.
          <br />
          Лэнс — специалист по покемонам-драконам.
        </p>
      </div>

  
      <h1 style={{ fontFamily: 'Comfortaa, sans-serif', color: 'white', marginTop: '30px' }}>Появляется в играх</h1>
      <div style={{ width: '100%', color: 'white', fontFamily: 'Comfortaa, sans-serif', marginTop: '50px', display: 'flex', flexWrap: 'wrap' }}>
        <img src={pokemonBlue} alt="Pokemon Blue" style={{ margin: '20px' }} />
        <img src={pokemonGreen} alt="Pokemon Green" style={{ margin: '20px' }} />
        <img src={pokemonYellow} alt="Pokemon Yellow" style={{ margin: '20px' }} />
        <img src={pokemonRed} alt="Pokemon Red" style={{ margin: '20px' }} />
      </div>
    </div>
  );
};

export default Map;