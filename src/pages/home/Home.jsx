import "./Home.css";
import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Pagination from "../pagination/Pagination";

export default function Home() {
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

  const sortList = [];

  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [Selected, setSelected] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const offset = (page - 1) * limit;

  useEffect(() => {
    setPostHandler(checkedItems);
    setPosts(posts);
  }, [posts]);

  const checkedItemHandler = (value, isChecked) => {
    if (isChecked) {
      // checkedItems.add(value);
      setCheckedItems([checkedItems, ...value]);
      setPostHandler(checkedItems);
    } else if (
      !isChecked &&
      checkedItems.find((sortType) => sortType === value)
    ) {
      // checkedItems.delete(value);
      const filter = checkedItems.filter((sortType) => sortType !== value);
      setCheckedItems([...filter]);
      setPostHandler(checkedItems);
    }
  };

  const checkHandler = ({ target }) => {
    console.log(`값 : ${target.value} || 체크 여부 : ${target.checked}`);
    checkedItemHandler(target.value, target.checked);
  };

  const setPostHandler = (checkedItems) => {
    checkedItems.forEach((sortType) => {
      if (sortType === "b" || sortType === "a" || sortType === "l") {
        console.log(`종족 필터 값 : ${sortType}`);
        const result = cards.filter((card) => card.race === sortType);
        setPosts(result);
      } else {
        const result = cards.filter((card) => card.rarity === sortType);
        console.log(`레벨 필터 값 : ${sortType}`);
        setPosts(result);
      }
    });
    console.log(`결과값 : ${JSON.stringify(posts)}`);
  };
  // checkedItems.forEach { value =>
  //   console.log(value);
  // }

  const handleSelect = (e) => {
    console.log(`결과 값 : ${JSON.stringify(e.target.value)}`);
    setSelected(e.target.value);
  };

  var content = cards.map((card) => (
    <div className="nft_card">
      <div
        className="nft_card_info"
        style={{ backgroundImage: `url("${card.url}")` }}
      >
        <div className="nft_card_gradient">
          {card.rarity === "e" && <div className="nft_level_e"></div>}
          {card.rarity === "sr" && <div className="nft_level_sr"></div>}
          {card.rarity === "r" && <div className="nft_level_r"></div>}
          {card.rarity === "n" && <div className="nft_level_n"></div>}
          <div className="nft_character_name">{card.name}</div>
          <div className="nft_price_section">
            <div className="nft_current_price">
              <img className="nft_price_icon" src="/images/card/ic_coin.png" />
              <span className="nft_price_text">{card.price} BUSD</span>
            </div>
            <div className="nft_max_price">
              <span className="nft_max_price_text">~${card.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="main">
      <Header cursor="marketplace" />
      <section>
        <div className="container">
          <span className="welcome_msg">Welcome to the LOD MarketPlace</span>
          <span className="sub_msg">
            Here you can search and buy item to enrich your collection
          </span>
          <div className="nft_info_section">
            <div className="floor_price nft_info_content">
              <img src="/images/main/left_box.png" alt="left_box" />
              <div className="nft_info_wrap">
                <span className="title">Floor Price</span>
                <span className="price">150 BUSD</span>
              </div>
            </div>
            <div className="total_volume nft_info_content">
              <img src="/images/main/left_box.png" alt="left_box" />
              <div className="nft_info_wrap">
                <span className="title">Total Volume</span>
                <span className="price">150 BUSD</span>
              </div>
            </div>
            <div className="highest_sell_price nft_info_content">
              <img src="/images/main/left_box.png" alt="left_box" />
              <div className="nft_info_wrap">
                <span className="title">Highest Sell Price</span>
                <span className="price">150 BUSD</span>
              </div>
            </div>
            <div className="total_listed_count nft_info_content">
              <img src="/images/main/right_box.png" alt="left_box" />
              <div className="nft_info_wrap">
                <span className="title">Total Listed Count</span>
                <span className="price">150 BUSD</span>
              </div>
            </div>
          </div>
          <div className="main_container">
            {/* 필터 섹션 */}
            <div className="main_filter_section">
              <div className="filter_title">Filters</div>
              <div className="race_section">
                <div className="race_title">Race</div>
                <div className="race_filter_section">
                  <input
                    id="ch_beny"
                    className="beny_checkbox"
                    type="checkbox"
                    value="b"
                    onChange={(e) => checkHandler(e)}
                  />
                  <label for="ch_beny">
                    <div className="beny_badge">
                      <div className="beny_icon" />
                    </div>
                    <div className="beny_title">Beny</div>
                  </label>
                  <input
                    id="ch_arche"
                    className="arche_chekbox"
                    type="checkbox"
                    value="a"
                    onChange={(e) => checkHandler(e)}
                  />
                  <label for="ch_arche">
                    <div className="arche_badge">
                      <div className="arche_icon" />
                    </div>
                    <div className="arche_title">Arche</div>
                  </label>
                  <input
                    id="ch_luchia"
                    className="luchia_chekbox"
                    type="checkbox"
                    value="l"
                    onChange={(e) => checkHandler(e)}
                  />
                  <label for="ch_luchia">
                    <div className="luchia_badge">
                      <div className="luchia_icon"></div>
                    </div>
                    <div className="luchia_title">Luchia</div>
                  </label>
                </div>
              </div>
              <div className="rarity_section">
                <div className="rarity_title">Rarity</div>
                <div className="rarity_filter_section">
                  <input
                    id="ch_epic"
                    className="epic_checkbox"
                    type="checkbox"
                    value="e"
                    onChange={(e) => checkHandler(e)}
                  />
                  <label for="ch_epic">
                    <div className="epic_badge">
                      <div className="epic_icon"></div>
                    </div>
                    <div className="epic_title">Epic</div>
                  </label>
                  <input
                    id="ch_sr"
                    className="sr_checkbox"
                    type="checkbox"
                    value="sr"
                    onChange={(e) => checkHandler(e)}
                  />
                  <label for="ch_sr">
                    <div className="sr_badge">
                      <div className="sr_icon"></div>
                    </div>
                    <div className="sr_title">Super Rare</div>
                  </label>
                  <input
                    id="ch_r"
                    className="r_checkbox"
                    type="checkbox"
                    value="r"
                    onChange={(e) => checkHandler(e)}
                  />
                  <label for="ch_r">
                    <div className="r_badge">
                      <div className="r_icon"></div>
                    </div>
                    <div className="r_title">Rare</div>
                  </label>
                  <input
                    id="ch_n"
                    className="n_checkbox"
                    type="checkbox"
                    value="n"
                    onChange={(e) => checkHandler(e)}
                  />
                  <label for="ch_n">
                    <div className="n_badge">
                      <div className="n_icon"></div>
                    </div>
                    <div className="n_title">Normal</div>
                  </label>
                </div>
              </div>
            </div>
            {/* 카드 섹션 */}
            <div className="main_card_section">
              <div className="sort_section">
                <div className="sort_result">640 NFTs - Floor 340BUSD</div>
                <div className="sort">
                  <span className="sort_title">Sort by:</span>
                  <select
                    className="select"
                    onChange={handleSelect}
                    value={Selected}
                  >
                    <option value="recent">Recent</option>
                    <option value="oldest">Oldest</option>
                    <option value="high">Low to High</option>
                    <option value="low">High to Low</option>
                  </select>
                </div>
              </div>
              <div className="card_section">
                {/* {content} */}

                {posts
                  .slice(offset, offset + limit)
                  .map(({ id, name, race, rarity, price, url }) => (
                    <article key={id}>
                      <div className="nft_card">
                        <div
                          className="nft_card_info"
                          style={{ backgroundImage: `url("${url}")` }}
                        >
                          <div className="nft_card_gradient">
                            {rarity === "e" && (
                              <div className="nft_level_e"></div>
                            )}
                            {rarity === "sr" && (
                              <div className="nft_level_sr"></div>
                            )}
                            {rarity === "r" && (
                              <div className="nft_level_r"></div>
                            )}
                            {rarity === "n" && (
                              <div className="nft_level_n"></div>
                            )}
                            <div className="nft_character_name">{name}</div>
                            <div className="nft_price_section">
                              <div className="nft_current_price">
                                <img
                                  className="nft_price_icon"
                                  src="/images/card/ic_coin.png"
                                />
                                <span className="nft_price_text">
                                  {price} BUSD
                                </span>
                              </div>
                              <div className="nft_max_price">
                                <span className="nft_max_price_text">
                                  ~${price}
                                </span>
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
                  total={posts.length}
                  limit={limit}
                  page={page}
                  setPage={setPage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
