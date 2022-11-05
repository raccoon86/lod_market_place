import "../detail/Detail.css";
import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Modal from "../modal/SellModal";
import { useLocation, useNavigate } from "react-router-dom";
import { cardData } from "../../data/Card";

function Detail() {
  const navigator = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const navToHome = () => {
    navigator("/", { state: { sortType: location.state.sortType } });
  };

  const data = cardData.filter((res) => res.id === location.state.id);
  return (
    <div className="main">
      <Header />
      <section>
        <div className="container">
          <span className="welcome_msg">Welcome to the LOD MarketPlace</span>
          <span className="sub_msg">
            Here you can search and
            <br className="mob_br" /> buy item to enrich your collection
          </span>

          <div className="detail_card_section">
            <div className="back_section" onClick={navToHome}>
              <div className="back_image" />
              <span>Back</span>
            </div>
            <div className="detail_card">
              <img className="character_image" src={data[0].url} />
              <div className="detail_character_info">
                <div className="character_name_section">
                  <span className="name">{data[0].name}</span>{" "}
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
                    <span className="price">
                      {data[0].price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                  <span className="price_info">
                    3% transaction fee will be paid when the sale is completed.
                  </span>
                </div>
                <React.Fragment>
                  <div className="button_buy_section">
                    <div onClick={openModal} className="button_buy" />
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

export default Detail;
