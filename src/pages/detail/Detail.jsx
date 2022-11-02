import "../detail/Detail.css";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
export default function detail() {
  return (
    <div className="main">
      <Header />
      <section>
        <div className="container">
          <span className="welcome_msg">Welcome to the LOD MarketPlace</span>
          <span className="sub_msg">
            Here you can search and buy item to enrich your collection
          </span>

          <div className="detail_card_section">
            <div className="back_section">
              <div className="back_image" />
              <span>Back</span>
            </div>
            <div className="detail_card">
              <div className="character_image" />
              <div className="detail_character_info">
                <div className="character_name_section">
                  <span className="name">Fated Judge</span>{" "}
                  <span className="code_number">#3390</span>
                </div>
                <div className="wallet_section">
                  <span className="wallet_title">Wallet Address</span>
                  <div className="wallet_address_section">
                    <span className="address_name">Owner</span>
                    <span className="address">
                      0xc885f123123122312221e40ffe5
                    </span>
                  </div>
                </div>
                <div className="attribute_section">
                  <span className="attribute_title">Attributes</span>
                  <div className="attribute_level" />
                </div>
                <div className="listing_price_section">
                  <span className="price_title">Listing Price</span>
                  <div className="price_section">
                    <div className="coin"></div>
                    <span className="price">2,000</span>
                  </div>
                  <span className="price_info">
                    3% transaction fee will be paid when the sale is completed.
                  </span>
                </div>
                <div className="button_buy_section">
                  <div className="button_buy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
