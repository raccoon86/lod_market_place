import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const [menu, setMenu] = useState("");
  const [mobMenu, setMobMenu] = useState(true);
  useEffect(() => {
    if (menu === "home") {
      console.log("goToHome");
    } else if (menu === "game") {
      console.log("goToGame");
    } else if (menu === "inventory") {
      console.log("goToInventory");
    }
  }, []);

  const navigator = useNavigate();

  const goToHome = () => {
    navigator("/");
  };

  const goToGame = () => {
    navigator("/game");
  };

  const goToInventory = () => {
    navigator("/inventory");
  };
  // console.log(`현재 위치 ${props.cursor}`);
  return (
    <div className="menu">
      <a className="logo"></a>
      {props.cursor === "marketplace" ? (
        <div className="cursor_section menu_list">
          {" "}
          <div className="c_marketplace menu_list" onClick={goToHome}>
            MARKETPLACE
          </div>{" "}
          <p className="cursor" />{" "}
        </div>
      ) : (
        <div className="marketplace menu_list" onClick={goToHome}>
          MARKETPLACE
        </div>
      )}
      <a className="comming menu_list">COMMING SOON</a>
      <a className="comming menu_list">COMMING SOON</a>
      {props.cursor === "game" ? (
        <div className="cursor_section menu_list">
          <div className="c_game" onClick={goToGame}>
            GAME
          </div>{" "}
          <p className="cursor" />{" "}
        </div>
      ) : (
        <div className="game menu_list" onClick={goToGame}>
          GAME
        </div>
      )}
      {props.cursor === "document" ? (
        <div className="cursor_section menu_list">
          <div className="c_document">DOCUMENT</div> <p className="cursor" />{" "}
        </div>
      ) : (
        <div className="document menu_list">DOCUMENT</div>
      )}
      {props.cursor === "inventory" ? (
        <div className="cursor_section menu_list">
          <div className="c_inventory" onClick={goToInventory}>
            INVENTORY
          </div>{" "}
          <p className="cursor" />{" "}
        </div>
      ) : (
        <div className="inventory menu_list" onClick={goToInventory}>
          INVENTORY
        </div>
      )}
      <a className="wallet menu_list"></a>
      <div className="mobMenu_btn">
        <div className="mobMenu_btn_list"></div>
        <div className="mobMenu_btn_list"></div>
        <div className="mobMenu_btn_list"></div>
      </div>

      {/* 모바일메뉴 */}
      <div className="mobMenu">
        <div className="mobMenu_wrap">
          {props.cursor === "marketplace" ? (
            <div className="cursor_section mobMenu_list active">
              {" "}
              <div className="c_marketplace" onClick={goToHome}>
                MARKETPLACE
              </div>{" "}
              <p className="cursor" />{" "}
            </div>
          ) : (
            <div className="marketplace" onClick={goToHome}>
              MARKETPLACE
            </div>
          )}
          <a className="comming mobMenu_list">
            COMMING <br className="mob_br" /> SOON
          </a>
          <a className="comming mobMenu_list">
            COMMING <br className="mob_br" /> SOON
          </a>
          {props.cursor === "game" ? (
            <div className="cursor_section mobMenu_list active">
              <div className="c_game" onClick={goToGame}>
                GAME
              </div>{" "}
              <p className="cursor" />{" "}
            </div>
          ) : (
            <div className="game mobMenu_list" onClick={goToGame}>
              GAME
            </div>
          )}
          {props.cursor === "document" ? (
            <div className="cursor_section mobMenu_list active">
              <div className="c_document">DOCUMENT</div>{" "}
              <p className="cursor" />{" "}
            </div>
          ) : (
            <div className="document mobMenu_list">DOCUMENT</div>
          )}
          {props.cursor === "inventory" ? (
            <div className="cursor_section mobMenu_list active">
              <div className="c_inventory" onClick={goToInventory}>
                INVENTORY
              </div>{" "}
              <p className="cursor" />{" "}
            </div>
          ) : (
            <div className="inventory mobMenu_list" onClick={goToInventory}>
              INVENTORY
            </div>
          )}
          <a className="wallet mobMenu_list"></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
