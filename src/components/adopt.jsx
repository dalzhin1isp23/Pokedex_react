import ava from '../../img/ava.png';

export const Adopter = ()=>{

    function adopt_on(){
        var navAdopt = document.querySelector(".nav_adopt");
        if (navAdopt) {
            navAdopt.style.display = navAdopt.style.display === 'none' ? 'block' : 'none';
        }
    }

    return  <div className="command">
          <p style={{ float: 'right', color: 'white' }}>+</p>
          <p className="command_name">Название команды</p>
          <div className="command_in"></div>
          <div className="command_in"></div>
          <div className="command_in"></div>
          <div className="command_in"></div>
          <div className="command_in"></div>
        </div>
}