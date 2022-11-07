import "./Game.css";
import React, { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import { cardData } from "../../data/Card";

export default function Account({ isConnect }) {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div className="info_section">
      <div className="account_info_section">
        <span className="account_info_title">Account Infomation</span>
        {isConnect === false ? (
          <div className="wallet_connect_section">
            <div className="button_connect_wallet" />
          </div>
        ) : (
          <div>
            <div className="wallet_address_title_section">
              <div className="wallet" /> <span>Wallet Address</span>
            </div>
            <div className="wallet_address_section">
              <div className="wallet_address_wrap">
                <span className="address_name">Owner</span>
                <span className="address">0xc885f123123122312221e40ffe5</span>
              </div>
            </div>
            <div className="wallet_token_section">
              <div className="token_title_section">
                <div className="token" /> <span>Token</span>
              </div>
              <div className="btn_sync" />
            </div>
            <div className="wallet_info_section">
              <div className="account_lort_section">
                <span className="lort_title">Account LORT:</span>
                <span className="lort_result">100</span>
                <div className="button_claim">
                  <p>Claim</p>
                </div>
              </div>
              <span className="acccount_line"></span>
              <div className="account_logt_section">
                <span className="logt_title">Account LOGT:</span>
                <span className="logt_result">100</span>
                <div className="button_claim">
                  <p>Claim</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="nft_section">
        <span className="nft_msg">NFTs</span>
        <div
          id={
            (isConnect === true && cardData.length === 0 && "empty") ||
            (cardData.length === 0 && "empty") ||
            (isConnect === false && "empty")
          }
          className="card_section"
        >
          {isConnect === false && cardData.length !== 0 && (
            <div className="empty_list_text">NO ITMES TO DISPLAY</div>
          )}
          {isConnect === true && cardData.length === 0 && (
            <div className="empty_list_text">NO ITMES TO DISPLAY</div>
          )}
          {isConnect === true &&
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
                  <div className="button_withdraw">
                    <p>Withdraw</p>
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
