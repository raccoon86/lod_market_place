import './MyNFTDetail.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Modal from "../modal/SellModal";

function MyNFTListDetail() {

    const navigator = useNavigate()
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const navToInventory = () => {
      navigator("/inventory", {tab : "my_nft_list"});
    }
  return (
<div className="main">
      <Header />
      <section>
        <div className="container">
          <span className="welcome_msg">Listed NFTs</span>
          <span className="sub_msg">here You can check out the list and unlist it</span>
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
                  <span className="code_number">#1-#10000</span>
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
                    <div className='price'>2,000</div>
                    <div className="coin_section">
                        <div className='line'/>
                        <div className='icon_coin'/>
                        <span className='unit'>BUSD</span>
                        <div className='arrow'/>
                    </div>
                  </div>
                  <span className="price_info">
                    3% transaction fee will be paid when the sale is comleted.
                  </span>
                </div>
                <React.Fragment>
                  <div className="button_sell_section">
                    <div onClick={ openModal } className="button_sell" />
                  </div>
                  <Modal open={modalOpen} close={closeModal} header="Modal heading"/>
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
