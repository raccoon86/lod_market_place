import "./Wallet.css";
import React, { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import { cardData } from "../../data/Card";

export default function Wallet({ isConnect }) {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [Selected, setSelected] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const offset = (page - 1) * limit;
  const [tab, setTab] = useState("game");

  return (
    <div className="info_section">
      <div className="wallet_info_section">
        <div className="wallet_token_section">
          <div className="token_title_section">
            <span>Wallet Token</span>
          </div>
          {isConnect === true && <div className="btn_sync" />}
        </div>
        {isConnect === false ? (
          <div className="wallet_connect_section">
            <div className="button_connect_wallet" />
          </div>
        ) : (
          <div className="deposit_info_section">
            <div className="deposit_lort_section">
              <span className="lort_title">Account LORT:</span>
              <span className="lort_result">100</span>
              <div className="button_deposit">
                <p>Deposit</p>
              </div>
            </div>
            <span className="acccount_line"></span>
            <div className="deposit_logt_section">
              <span className="logt_title">Account LOGT:</span>
              <span className="logt_result">100</span>
              <div className="button_deposit">
                <p>Deposit</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="nft_section">
        <span className="nft_msg">Inventory NFTs</span>
        <div
          className="card_section"
          id={
            (isConnect === true && cardData.length === 0 && "empty") ||
            (cardData.length === 0 && "empty") ||
            (isConnect === false && "empty")
          }
        >
          {isConnect === false && cardData.length !== 0 && (
            <div className="empty_list_text">NO ITMES TO DISPLAY</div>
          )}
          {isConnect === true && cardData.length === 0 && (
            <div className="empty_list_text">NO ITMES TO DISPLAY</div>
          )}
          {isConnect === true &&
            cardData !== null &&
            cardData
              .slice(offset, offset + limit)
              .map(({ id, name, race, rarity, price, url }) => (
                <article key={id}>
                  <div className="nft_card">
                    <div
                      className="nft_card_info"
                      style={{ backgroundImage: `url("${url}")` }}
                    >
                      <div className="nft_card_gradient">
                        {rarity === "e" && <div className="nft_level_e"></div>}
                        {rarity === "sr" && (
                          <div className="nft_level_sr"></div>
                        )}
                        {rarity === "r" && <div className="nft_level_r"></div>}
                        {rarity === "n" && <div className="nft_level_n"></div>}
                        <div className="nft_character_name">{name}</div>
                      </div>
                    </div>
                  </div>
                  <div className="button_deposit">
                    <p>Deposit</p>
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
    </div>
  );
}
