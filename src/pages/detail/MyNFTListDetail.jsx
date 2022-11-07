import "./MyNFTListDetail.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Modal from "../modal/CancelModal";

function MyNFTListDetail() {
  const navigator = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const navToInventory = () => {
    navigator("/inventory", { state: { tab: "my_nft_list" } });
  };
  return (
    <div className="main">
      <Header />
      <section>
        <div className="container">
          <span className="welcome_msg">Listed NFTs</span>
          <span className="sub_msg">
            here You can check out
            <br className="mob_br" /> the list and unlist it
          </span>
          <div className="detail_card_section">
            <div className="back_section" onClick={navToInventory}>
              <div className="back_image" />
              <span>Back</span>
            </div>
            <div className="detail_card">
              <div className="character_image" />
              <div className="detail_character_info">
                <div className="character_name_section">
                  <span className="name">#Storm Crow</span>
                  <span className="code_number">#9560</span>
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
                <div className="nft_listing_price_section">
                  <span className="price_title">Listing Price</span>
                  <div className="price_section">
                    <div className="icon_coin" />
                    <div className="price">2,000</div>
                  </div>
                  <span className="price_info">
                    Marketplace will receive a 3% commission.
                  </span>
                </div>
                <React.Fragment>
                  <div className="button_280">
                    <div className="button_280_bg"></div>
                    <div onClick={openModal} className="button_280_body">
                      <span className="button_280_text">Cancel sale</span>
                    </div>
                  </div>
                  <Modal
                    open={modalOpen}
                    close={closeModal}
                    header="Modal heading"
                  />
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyNFTListDetail;
