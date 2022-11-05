import React from "react";
import "./CancelModal.css";
const CancelModal = (props) => {
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
              <div className="modal_title">
                Are you sure your’re canceling the sale?
              </div>
              <div className="button_400">
                <div className="button_400_bg" />
                <div onClick={close} className="button_400_body">
                  <span className="button_280_text">Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CancelModal;
