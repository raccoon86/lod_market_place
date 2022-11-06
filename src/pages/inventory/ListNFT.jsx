import "./MyNFT.css";
import React, { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { cardData } from "../../data/Card";
function ListNFT({ isConnect }) {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const navigator = useNavigate();

  const goToMyNftListDetail = (id) => {
    navigator(`/inventory/my_nft_list/detail/${id}`);
  };
  return (
    <div className="main_card_section">
      <div
        id={
          (isConnect === true && cardData.length === 0 && "empty") ||
          (cardData.length === 0 && "empty") ||
          (isConnect === false && "empty")
        }
        className="card_section"
      >
        {/* {content} */}
        {isConnect === false && cardData.length === 0 && (
          <div className="empty_list_text">NO ITMES TO DISPLAY</div>
        )}
        {isConnect === true && cardData.length === 0 && (
          <div className="empty_list_text">NO ITMES TO DISPLAY</div>
        )}
        {isConnect === false && (
          <div className="empty_list_text">PLEASE CONNECT WALLET</div>
        )}
        {isConnect === true &&
          cardData.length !== 0 &&
          cardData
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
          total={cardData.length !== 0 ? cardData.length : 1}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default ListNFT;
