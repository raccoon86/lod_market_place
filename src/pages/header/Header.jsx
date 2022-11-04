import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const [menu, setMenu] = useState("");

  useEffect(() => {
      if(menu === "home") {
        console.log("goToHome");
      } else if (menu === "game") {
        console.log("goToGame");
      } else if (menu === "inventory") {
        console.log("goToInventory");
      }
  }, []);

  const navigator = useNavigate();

  const goToHome = () => {
        console.log("goToGame");
    navigator('/');
  }

  const goToGame = event => {
    console.log("goToGame");
    navigator("/game");
  }

  const goToInventory = event => {
    console.log("goToInventory");
    navigator('/inventory');
  }
  // console.log(`현재 위치 ${props.cursor}`);
  return (
    <div className="menu">
        <a className="logo"></a>
        {props.cursor === "marketplace" ? <div className='cursor_section'> <div className="c_marketplace" onClick={goToHome}>MARKETPLACE</div> <p className='cursor'/> </div> : <div className="marketplace" onClick={goToHome}>MARKETPLACE</div> }
        <a className="comming">COMMING SOON</a> 
        <a className="comming">COMMING SOON</a>
        {props.cursor === "game" ? <div className='cursor_section'><div className="c_game" onClick={goToGame}>GAME</div> <p className='cursor'/> </div> : <div className="game" onClick={goToGame}>GAME</div> }
        {props.cursor === "document" ? <div className='cursor_section'><div className="c_document">DOCUMENT</div> <p className='cursor'/> </div>: <div className="document">DOCUMENT</div>}
        {props.cursor === "inventory" ? <div className='cursor_section'><div className='c_inventory' onClick={goToInventory}>INVENTORY</div> <p className='cursor'/> </div> : <div className="inventory" onClick={goToInventory}>INVENTORY</div>}
        <a className="wallet"></a>
    </div>
  );
}

export default Header;