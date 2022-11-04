import "./Game.css";
import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import GameInfo from "./GameInfo";
import Account from "./Account";
import Wallet from "./Wallet";

const Game = () => {
  // const [posts, setPosts] = useState([]);
  // const [limit, setLimit] = useState(10);
  // const [page, setPage] = useState(1);
  // const [Selected, setSelected] = useState("");
  // const [checkedItems, setCheckedItems] = useState([]);
  // const offset = (page - 1) * limit;
  const [tab, setTab] = useState("game");
  const onClick = (value) => {
    console.log(value);
    setTab(value);
    console.log(`결과 ${value}`);
  };

  const checkHandler = ({ target }) => {
    setTab(target.value);
  };

  const cards = [
    {
      id: 1,
      name: "Fated Judge",
      race: "b",
      rarity: "e",
      price: 502,
      url: "/images/card/card_01.png",
    },
    {
      id: 2,
      name: "Son of the Wind",
      race: "a",
      rarity: "e",
      price: 502,
      url: "/images/card/card_02.png",
    },
    {
      id: 3,
      name: "Queen of the Night",
      race: "l",
      rarity: "e",
      price: 502,
      url: "/images/card/card_03.png",
    },
    {
      id: 4,
      name: "Devastator",
      race: "b",
      rarity: "e",
      price: 502,
      url: "/images/card/card_04.png",
    },
    {
      id: 5,
      name: "Storm Crow",
      race: "b",
      rarity: "sr",
      price: 502,
      url: "/images/card/card_05.png",
    },
    {
      id: 6,
      name: "Director",
      race: "a",
      rarity: "sr",
      price: 502,
      url: "/images/card/card_06.png",
    },
    {
      id: 7,
      name: "Night Watcher",
      race: "l",
      rarity: "sr",
      price: 502,
      url: "/images/card/card_07.png",
    },
    {
      id: 8,
      name: "Silver Knight",
      race: "b",
      rarity: "sr",
      price: 502,
      url: "/images/card/card_08.png",
    },
    {
      id: 9,
      name: "God of Death",
      race: "b",
      rarity: "sr",
      price: 502,
      url: "/images/card/card_09.png",
    },
    {
      id: 10,
      name: "Demon Hunter",
      race: "a",
      rarity: "sr",
      price: 502,
      url: "/images/card/card_10.png",
    },
    {
      id: 11,
      name: "Whisper of Dawn",
      race: "l",
      rarity: "sr",
      price: 502,
      url: "/images/card/card_11.png",
    },
    {
      id: 12,
      name: "Forest Guardian",
      race: "b",
      rarity: "sr",
      price: 502,
      url: "/images/card/card_12.png",
    },
    {
      id: 13,
      name: "Wind Warrior",
      race: "b",
      rarity: "r",
      price: 502,
      url: "/images/card/card_13.png",
    },
    {
      id: 14,
      name: "High Ranking Knight",
      race: "a",
      rarity: "r",
      price: 502,
      url: "/images/card/card_14.png",
    },
    {
      id: 15,
      name: "Swordsman",
      race: "l",
      rarity: "r",
      price: 502,
      url: "/images/card/card_15.png",
    },
    {
      id: 16,
      name: "Water Purification",
      race: "b",
      rarity: "r",
      price: 502,
      url: "/images/card/card_16.png",
    },
    {
      id: 17,
      name: "Assassin",
      race: "b",
      rarity: "r",
      price: 502,
      url: "/images/card/card_17.png",
    },
    {
      id: 18,
      name: "Wizard",
      race: "a",
      rarity: "r",
      price: 502,
      url: "/images/card/card_18.png",
    },
    {
      id: 19,
      name: "Water Spirit",
      race: "l",
      rarity: "r",
      price: 502,
      url: "/images/card/card_19.png",
    },
    {
      id: 20,
      name: "Sanctuary Guardian",
      race: "b",
      rarity: "r",
      price: 502,
      url: "/images/card/card_20.png",
    },
    {
      id: 21,
      name: "Hunter",
      race: "b",
      rarity: "r",
      price: 502,
      url: "/images/card/card_21.png",
    },
    {
      id: 22,
      name: "Pioneer",
      race: "a",
      rarity: "r",
      price: 502,
      url: "/images/card/card_22.png",
    },
    {
      id: 23,
      name: "Messenger",
      race: "l",
      rarity: "n",
      price: 502,
      url: "/images/card/card_23.png",
    },
    {
      id: 24,
      name: "Scout",
      race: "b",
      rarity: "n",
      price: 502,
      url: "/images/card/card_24.png",
    },
    {
      id: 25,
      name: "Lookout",
      race: "l",
      rarity: "n",
      price: 502,
      url: "/images/card/card_25.png",
    },
    {
      id: 26,
      name: "Spearhead",
      race: "b",
      rarity: "n",
      price: 502,
      url: "/images/card/card_26.png",
    },
    {
      id: 27,
      name: "Forest Spirit",
      race: "l",
      rarity: "n",
      price: 502,
      url: "/images/card/card_27.png",
    },
    {
      id: 28,
      name: "Observer",
      race: "b",
      rarity: "n",
      price: 502,
      url: "/images/card/card_28.png",
    },
    {
      id: 29,
      name: "Guardian",
      race: "l",
      rarity: "n",
      price: 502,
      url: "/images/card/card_29.png",
    },
    {
      id: 30,
      name: "Watcher",
      race: "b",
      rarity: "n",
      price: 502,
      url: "/images/card/card_30.png",
    },
    {
      id: 31,
      name: "Overseer",
      race: "l",
      rarity: "n",
      price: 502,
      url: "/images/card/card_31.png",
    },
    {
      id: 32,
      name: "Rogue",
      race: "b",
      rarity: "n",
      price: 502,
      url: "/images/card/card_32.png",
    },
  ];

  return (
    <div className="main">
      <Header cursor="game" />
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
              <label for="ch_game">
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
              <label for="ch_account">
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
              <label for="ch_wallet">
                <div className="wallet_title">Wallet</div>
              </label>
            </div>
            {tab === "game" && <GameInfo />}
            {tab === "account" && <Account />}
            {tab == "wallet" && <Wallet />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
