import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ cursor, getIsConnect }) {
  const [menu, setMenu] = useState("");
  const [mobMenu, setMobMenu] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isConnect, setIsConnect] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  const goToHome = () => {
    navigator("/");
  };

  const goToGame = () => {
    navigator("/game");
  };

  const goToInventory = () => {
    navigator("/inventory");
  };

  const setActive = () => {
    setIsActive(!isActive);
  };

  const connectActive = () => {
    setIsConnect(!isConnect);
    getIsConnect(!isConnect);
  };
  const text = "0xc885f123123122312221e40ffe5";
  // console.log(`현재 위치 ${props.cursor}`);
  return (
    <div className="menu">
      <a className="logo" onClick={goToHome}></a>
      {cursor === "marketplace" ? (
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
      {cursor === "game" ? (
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
      {cursor === "document" ? (
        <div className="cursor_section menu_list">
          <div className="c_document">DOCUMENT</div> <p className="cursor" />{" "}
        </div>
      ) : (
        <div className="document menu_list">DOCUMENT</div>
      )}
      {cursor === "inventory" ? (
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
      <div
        className="wallet menu_list"
        onClick={() => {
          connectActive();
        }}
      >
        <img className="ic_wallet" srcSet="/images/main/ic_wallet.png" />
        <span className="wallet_text">
          {isConnect === true
            ? text.length > 15
              ? text.substr(0, 8) + "..." + text.substr(20)
              : text
            : "Connect Wallet"}
        </span>
      </div>
      <div
        className="mobMenu_btn"
        onClick={() => {
          setActive();
        }}
      >
        <div
          className={
            isActive === true ? "mobMenu_btn_list active" : "mobMenu_btn_list"
          }
        ></div>
        <div
          className={
            isActive === true ? "mobMenu_btn_list active" : "mobMenu_btn_list"
          }
        ></div>
        <div
          className={
            isActive === true ? "mobMenu_btn_list active" : "mobMenu_btn_list"
          }
        ></div>
      </div>

      {/* 모바일메뉴 */}
      <div className={isActive === true ? "mobMenu active" : "mobMenu"}>
        <div className="mobMenu_wrap">
          {cursor === "marketplace" ? (
            <div className="cursor_section mobMenu_list">
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
          {cursor === "game" ? (
            <div className="cursor_section mobMenu_list">
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
          {cursor === "document" ? (
            <div className="cursor_section mobMenu_list">
              <div className="c_document">DOCUMENT</div>{" "}
              <p className="cursor" />{" "}
            </div>
          ) : (
            <div className="document mobMenu_list">DOCUMENT</div>
          )}
          {cursor === "inventory" ? (
            <div className="cursor_section mobMenu_list">
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
          <div
            className="m_wallet mobMenu_list"
            onClick={() => {
              connectActive();
            }}
          >
            <img className="ic_wallet" srcSet="/images/main/ic_wallet.png" />
            <span className="wallet_text">
              {isConnect === true
                ? text.length > 15
                  ? text.substr(0, 8) + "..." + text.substr(20)
                  : text
                : "Connect Wallet"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
