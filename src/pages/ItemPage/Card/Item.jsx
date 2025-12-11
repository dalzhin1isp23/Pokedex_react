import React from 'react';
import '../../../App.css'; 
import beastBall from '../image/beast_ball.png'; 
import '../item.css'; 
const Item = () => {
  return (
    <div className="content">
      
        <button className="but_krosh">Назад</button>
        <br />


        <img src={beastBall} alt="Beast Ball" className="img_big" />

  
        <p className="item_text">
            Шар-зверь — это шар, который увеличивает вероятность поимки в 5 раз при
            использовании на Ультра-зверях и в 1 раз при использовании на Селеби; на всех
            остальных покемонах вероятность составляет 0,1. В отличие от всех остальных
            поке-шаров, шары-звери не разбиваются при броске о блок.
            <br />
            <br />
            Шар Зверя можно получить в Ультракосмосе в качестве случайного дропа из Сундука
            Зверя, из некоторых сооружений в биомах Ультрапустыни или из Легендарных
            покестопов.
        </p>
    </div>
  );
};

export default Item;