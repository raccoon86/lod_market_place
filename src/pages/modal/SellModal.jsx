import React from "react";
import "./SellModal.css";

const SellModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <div className="modal_section">
          <div className="modal_wrap">
            <div className="modal_close" onClick={close}>
              <span className="close_text">close</span>{" "}
              <span className="close_icon"></span>
            </div>
            <div className="modal_body">
              <div className="modal_imgs">
                <img
                  src="/images/modal/modal_obj.png"
                  className="modal_obj-topright"
                  alt="modal_obj"
                />
                <img
                  src="/images/modal/modal_obj.png"
                  className="modal_obj-topleft"
                  alt="modal_obj"
                />
                <img
                  src="/images/modal/modal_obj.png"
                  className="modal_obj-bottomright"
                  alt="modal_obj"
                />
                <img
                  src="/images/modal/modal_obj.png"
                  className="modal_obj-bottomleft"
                  alt="modal_obj"
                />
              </div>
              <div className="modal_title">Sell Mystery Box#9998 For</div>
              <div className="price_section">
                <div className="icon_price" />
                <span className="price">2,000 BUSD ?</span>
              </div>
              <div className="info">
                Your asset will be listed on Lord of Dragons{" "}
                <br className="mob_br" />
                marketplace with a fixed price.
                <br className="mob_br" />
                <br className="pc_br" />
                you can check it later on <span>Marketplace</span> tab or cancel
                <br className="mob_br" />
                the order on this Listed NFTs Page
                <br className="pc_br" />
                The final amount you will
                <br className="mob_br" /> receive will be 1,940BUSD
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
