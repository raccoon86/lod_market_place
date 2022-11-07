import "./Game.css";
import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import GameInfo from "./GameInfo";
import Account from "./Account";
import Wallet from "./Wallet";

const Game = () => {
  const [isConnect, setIsConnect] = useState(false);
  const [tab, setTab] = useState("game");
  const onClick = (value) => {
    console.log(value);
    setTab(value);
    console.log(`결과 ${value}`);
  };

  const checkHandler = ({ target }) => {
    setTab(target.value);
  };

  const getIsConnect = (isConnect) => {
    setIsConnect(isConnect);
  };

  return (
    <div className="main">
      <Header cursor="game" getIsConnect={getIsConnect} />
      <div className="game_section">
        <div className="container">
          <span className="game_msg">Game</span>
          <span className="sub_msg">
            Play the LOD and Manage
            <br className="mob_br" /> Your Account
          </span>
          <div className="game_info_container">
            <div className="menu_section">
              <input
                id="ch_game"
                className="game_checkbox"
                name="game"
                type="radio"
                value="game"
                onChange={(e) => checkHandler(e)}
                defaultChecked={true}
              />
              <label htmlFor="ch_game">
                <div className="game_title">Game PLAY</div>
              </label>

              <input
                id="ch_account"
                className="account_checkbox"
                name="game"
                type="radio"
                value="account"
                onChange={(e) => checkHandler(e)}
              />
              <label htmlFor="ch_account">
                <div className="account_title">Account</div>
              </label>

              <input
                id="ch_wallet"
                className="wallet_checkbox"
                name="game"
                type="radio"
                value="wallet"
                onChange={(e) => checkHandler(e)}
              />
              <label htmlFor="ch_wallet">
                <div className="wallet_title">Wallet</div>
              </label>
            </div>
            {tab === "game" && <GameInfo />}
            {tab === "account" && <Account isConnect={isConnect} />}
            {tab == "wallet" && <Wallet isConnect={isConnect} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
