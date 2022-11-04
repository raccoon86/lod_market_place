import React from "react";
import './SellModal.css';

const SellModal = (props) => {
 // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
 const { open, close, header } = props;

 return (
   // 모달이 열릴때 openModal 클래스가 생성된다.
   <div className={open ? 'openModal modal' : 'modal'}>
     {open ? (
       <div className="modal_section">
        <div className="modal_wrap">
          <div className="modal_close" onClick={close}>
            <span className="close_text">close</span> <span className="close_icon"></span>
          </div>
          <div className="modal_body">
            <div className="modal_title">Sell Mystery Box#9998 For</div>
            <div className="price_section">
              <div className="icon_price"/><span className="price">2,000 BUSD ?</span>
            </div>
            <div className="info">Your asset will be listed  on Lord of Dragons marketplace with a fixed price.<br/>
                            you can check it later on <span>Marketplace</span> tab or cancel the order on this Listed NFTs Page
                            <br/><br/>
                                  The final amount you will receive will be 1,940BUSD
            </div>
            <div className="button_sell" onClick={close}></div>
          </div>
        </div>
       </div>
     ) : null}
   </div>
 );
};

export default SellModal;  