import "./Inventory.css";
import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import { useLocation } from "react-router-dom";
import MyNFT from "./MyNFT";
import ListNFT from "./ListNFT";
import ActivityNFT from "./ActivityNFT";

export default function Inventory() {
  const location = useLocation();

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
  // const initTab = (location.state === null && location.state.tab === null) ? location.state.tab : "my_nft";
  const initTab =
    location.state === null
      ? "my_nft"
      : location.state.tab !== null && location.state.tab;
  console.log(`탭 : ${JSON.stringify(initTab)}`);
  const [tab, setTab] = useState(initTab);
  const [posts, setPosts] = useState([cards]);

  console.log(tab);

  // useEffect(() => {
  //     // setPostHandler(checkedItems);
  //     // setPosts(cards);
  //   }, [posts]);

  const checkHandler = ({ target }) => {
    setTab(target.value);
  };

  return (
    <div className="main">
      <Header cursor="inventory" />
      <div className="inventory_container">
        <section>
          <div className="container">
            {tab === "my_nft" && (
              <div>
                <span className="my_nft_msg">My NFTs</span>
                <span className="sub_msg">
                  here You can check the items and sell it
                </span>
              </div>
            )}

            {tab === "my_nft_list" && (
              <div>
                <span className="my_nft_msg">Listed NFTs</span>
                <span className="sub_msg">
                  here You can check out the list and unlist it
                </span>
              </div>
            )}

            {tab === "activity" && (
              <div>
                <span className="my_nft_msg">Activity</span>
                <span className="sub_msg"></span>
              </div>
            )}
            <div className="my_nft_container">
              <div className="my_nft_list_section">
                <input
                  id="ch_my_nft"
                  className="my_nft_checkbox"
                  name="inventory"
                  type="radio"
                  value="my_nft"
                  onChange={(e) => checkHandler(e)}
                  defaultChecked={tab === "my_nft" ? true : false}
                />
                <label for="ch_my_nft">
                  <div className="my_nft_title">NFTs</div>
                </label>

                <input
                  id="ch_my_nft_list"
                  className="my_nft_list_checkbox"
                  name="inventory"
                  type="radio"
                  value="my_nft_list"
                  onChange={(e) => checkHandler(e)}
                  defaultChecked={tab === "my_nft_list" ? true : false}
                />
                <label for="ch_my_nft_list">
                  <div className="my_nft_list_title">Listed NFTs</div>
                </label>

                <input
                  id="ch_activity"
                  className="activity_checkbox"
                  name="inventory"
                  type="radio"
                  value="activity"
                  onChange={(e) => checkHandler(e)}
                  defaultChecked={tab === "activity" ? true : false}
                />
                <label for="ch_activity">
                  <div className="activity_title">Activity NFTs</div>
                </label>
              </div>
              {tab === "my_nft" && <MyNFT />}
              {tab === "my_nft_list" && <ListNFT />}
              {tab === "activity" && <ActivityNFT />}
            </div>
          </div>
        </section>
        {/* <span className='my_nft_msg'>My NFTs</span>
        <span className='sub_msg'>here You can check the items and sell it</span> */}
      </div>
      <Footer />
    </div>
  );
}
