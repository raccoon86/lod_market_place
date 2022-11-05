import "./Home.css";
import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Pagination from "../pagination/Pagination";
import { cardData } from "../../data/Card";
function Home() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [Selected, setSelected] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [subCkedItems, setSubCheckedItems] = useState([]);
  const offset = (page - 1) * limit;
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   // setCount(count + 1);
  //   console.log(`체크 값 : ${checkedItems} || 순서 : ${count}`);
  //   // setPostHandler(checkedItems);
  //   // setPosts(posts);
  // });

  useEffect(() => {
    // console.log(checkedItems);
    setPostHandler(checkedItems);
  }, [checkedItems]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const checkedItemHandler = (sortType, value, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, { sortType, value }]);
    } else if (!isChecked && checkedItems.find((res) => res.value === value)) {
      // checkedItems.delete(value);
      const filter = checkedItems.filter((res) => res.value !== value);
      setCheckedItems([...filter]);
    }
  };

  const checkHandler = ({ target }, sortType) => {
    checkedItemHandler(sortType, target.value, target.checked);
  };

  const setPostHandler = (checkedItems) => {
    var raceList = [];
    var resultList = [];
    if (checkedItems.length === 0) {
      setPosts([]);
    } else {
      console.log(checkedItems);
      if (
        checkedItems.find((res) => res.sortType === "race") &&
        checkedItems.find((res) => res.sortType === "rarity")
      ) {
        // 전부 선택
        checkedItems.map(({ sortType, value }) => {
          const result = cardData.filter((res) => res.race == value);
          result.map((res) => {
            raceList.push(res);
          });
        });

        checkedItems.map(({ sortType, value }) => {
          const result = raceList.filter((res) => res.rarity == value);
          result.map((res) => {
            resultList.push(res);
          });
        });
      } else if (checkedItems.find((res) => res.sortType !== "rarity")) {
        checkedItems.map(({ sortType, value }) => {
          const result = cardData.filter((res) => res.race == value);
          result.map((res) => {
            resultList.push(res);
          });
        });
      } else if (checkedItems.find((res) => res.sortType !== "race")) {
        checkedItems.map(({ sortType, value }) => {
          const result = cardData.filter((res) => res.rarity == value);
          result.map((res) => {
            resultList.push(res);
          });
        });
      }
    }
    // checkedItems.map((sortType) => {
    //   if (sortType === "b" || sortType === "a" || sortType === "l") {
    //     const result = cardData.filter((cards) => cards.race === sortType);
    //     result.map((res) => {
    //       resultList.push(res);
    //     });
    //   }

    // if (
    //   sortType === "e" ||
    //   sortType === "sr" ||
    //   sortType === "r" ||
    //   sortType === "n"
    // ) {
    //   console.log(`정렬 타입 ${sortType}`);
    //   const result = resultList.filter((cards) => cards.rarity === sortType);
    //   result.map((res) => {
    //     resultList.push(res);
    //   });
    // }
    // });
    setPosts([...new Set(resultList)]);
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="main">
      <Header cursor="marketplace" />
      <section>
        <div className="container">
          <span className="welcome_msg">
            Welcome to the
            <br className="tab_br" />
            <br className="mob_br" /> LOD MarketPlace
          </span>
          <span className="sub_msg">
            Here you can search and <br className="mob_br" /> buy item to enrich
            your collection
          </span>
          <div className="nft_info_section">
            <div className="floor_price nft_info_content">
              <picture>
                <source
                  media="(min-width:1180px )"
                  srcSet="/images/main/left_box.png"
                />
                <source
                  media="(max-width:1179px )"
                  srcSet="/images/main/left_box.png"
                />
                <img srcSet="/images/main/left_box.png" alt="left_box" />
              </picture>
              <div className="nft_info_wrap">
                <span className="title">Floor Price</span>
                <span className="price">150 BUSD</span>
              </div>
            </div>
            <div className="total_volume nft_info_content">
              <picture>
                <source
                  media="(min-width:1180px )"
                  srcSet="/images/main/left_box.png"
                />
                <source
                  media="(max-width:1179px )"
                  srcSet="/images/main/left_box.png"
                />
                <img srcSet="/images/main/left_box.png" alt="left_box" />
              </picture>
              <div className="nft_info_wrap">
                <span className="title">Total Volume</span>
                <span className="price">150 BUSD</span>
              </div>
            </div>
            <div className="highest_sell_price nft_info_content">
              <picture>
                <source
                  media="(min-width:1180px )"
                  srcSet="/images/main/left_box.png"
                />
                <source
                  media="(max-width:1179px )"
                  srcSet="/images/main/left_box.png"
                />
                <img srcSet="/images/main/left_box.png" alt="left_box" />
              </picture>
              <div className="nft_info_wrap">
                <span className="title">Highest Sell Price</span>
                <span className="price">150 BUSD</span>
              </div>
            </div>
            <div className="total_listed_count nft_info_content">
              <picture>
                <source
                  media="(min-width:1180px )"
                  srcSet="/images/main/left_box.png"
                />
                <source
                  media="(max-width:1179px )"
                  srcSet="/images/main/left_box.png"
                />
                <img srcSet="/images/main/left_box.png" alt="left_box" />
              </picture>
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
              <div className="filter_wrap">
                <div className="race_section">
                  <div className="race_title">Race</div>
                  <div className="race_filter_section">
                    <input
                      id="ch_beny"
                      className="beny_checkbox"
                      type="checkbox"
                      value="b"
                      onChange={(e) => {
                        checkHandler(e, "race");
                      }}
                    />
                    <label htmlFor="ch_beny">
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
                      onChange={(e) => {
                        checkHandler(e, "race");
                      }}
                    />
                    <label htmlFor="ch_arche">
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
                      onChange={(e) => {
                        checkHandler(e, "race");
                      }}
                    />
                    <label htmlFor="ch_luchia">
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
                      onChange={(e) => {
                        checkHandler(e, "rarity");
                      }}
                    />
                    <label htmlFor="ch_epic">
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
                      onChange={(e) => {
                        checkHandler(e, "rarity");
                      }}
                    />
                    <label htmlFor="ch_sr">
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
                      onChange={(e) => {
                        checkHandler(e, "rarity");
                      }}
                    />
                    <label htmlFor="ch_r">
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
                      onChange={(e) => {
                        checkHandler(e, "rarity");
                      }}
                    />
                    <label htmlFor="ch_n">
                      <div className="n_badge">
                        <div className="n_icon"></div>
                      </div>
                      <div className="n_title">Normal</div>
                    </label>
                  </div>
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

                {posts.length !== 0 &&
                  posts
                    .slice(offset, offset + limit)
                    .map(({ id, name, race, rarity, price, url }, idx) => (
                      <article key={idx}>
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
                                    srcSet="/images/card/ic_coin.png"
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
                  total={posts.length === 0 ? 1 : posts.length}
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

export default Home;
