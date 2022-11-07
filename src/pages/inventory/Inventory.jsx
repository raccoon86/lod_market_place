import "./Inventory.css";
import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { cardData } from "../../data/Card";
import { useLocation } from "react-router-dom";
import MyNFT from "./MyNFT";
import ListNFT from "./ListNFT";
import ActivityNFT from "./ActivityNFT";

export default function Inventory() {
  const location = useLocation();
  const [isConnect, setIsConnect] = useState(false);
  // const initTab = (location.state === null && location.state.tab === null) ? location.state.tab : "my_nft";
  const initTab =
    location.state === null
      ? "my_nft"
      : location.state.tab !== null && location.state.tab;
  console.log(`탭 : ${JSON.stringify(initTab)}`);
  const [tab, setTab] = useState(initTab);
  const [posts, setPosts] = useState([cardData]);

  // useEffect(() => {
  //     // setPostHandler(checkedItems);
  //     // setPosts(cards);
  //   }, [posts]);

  const checkHandler = ({ target }) => {
    setTab(target.value);
  };

  const getIsConnect = (isConnect) => {
    setIsConnect(isConnect);
  };

  return (
    <div className="main invenbg">
      <Header cursor="inventory" getIsConnect={getIsConnect} />
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
                <label htmlFor="ch_my_nft">
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
                <label htmlFor="ch_my_nft_list">
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
                <label htmlFor="ch_activity">
                  <div className="activity_title">Activity NFTs</div>
                </label>
              </div>
              {tab === "my_nft" && <MyNFT isConnect={isConnect} />}
              {tab === "my_nft_list" && <ListNFT isConnect={isConnect} />}
              {tab === "activity" && <ActivityNFT isConnect={isConnect} />}
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
