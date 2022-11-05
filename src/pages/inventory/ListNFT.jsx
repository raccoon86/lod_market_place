import "./MyNFT.css";
import React, { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import { useNavigate } from "react-router-dom";

function ListNFT() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const navigator = useNavigate();

  useEffect(() => {
    if (posts.length === 0) {
      setPosts(cards);
    } else {
      console.log(posts.length);
    }
  }, [setPosts]);

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
  const goToMyNftListDetail = (id) => {
    navigator(`/inventory/my_nft_list/detail/${id}`);
  };
  return (
    <div className="main_card_section">
      <div className="card_section">
        {/* {content} */}
        {posts.length !== 0 &&
          posts
            .slice(offset, offset + limit)
            .map(({ id, name, race, rarity, price, url }, idx) => (
              <article key={idx}>
                <div className="nft_card">
                  <div
                    className="nft_card_info"
                    style={{ backgroundImage: `url("${url}")` }}
                    onClick={() => goToMyNftListDetail(id)}
                  >
                    <div className="nft_card_gradient">
                      {rarity === "e" && <div className="nft_level_e"></div>}
                      {rarity === "sr" && <div className="nft_level_sr"></div>}
                      {rarity === "r" && <div className="nft_level_r"></div>}
                      {rarity === "n" && <div className="nft_level_n"></div>}
                      <div className="nft_character_name">{name}</div>
                      <div className="nft_price_section">
                        <div className="nft_current_price">
                          <img
                            className="nft_price_icon"
                            src="/images/card/ic_coin.png"
                          />
                          <span className="nft_price_text">{price} BUSD</span>
                        </div>
                        <div className="nft_max_price">
                          <span className="nft_max_price_text">~${price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
      </div>
      <div className="pagination_section">
        <Pagination
          total={posts.length !== 0 ? posts.length : 0}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default ListNFT;
