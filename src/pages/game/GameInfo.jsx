import React from "react";

export default function GameInfo() {
  return (
    <div className="game_info_section">
      <div className="download_title">
        <span>Download</span>
      </div>
      <div className="download_info">
        <picture>
          <source
            media="(min-width:1180px )"
            srcset="/images/game/info_pc.png"
          />
          <source
            media="(max-width:420px )"
            srcset="/images/game/info_mob.png"
          />
          <img src="/images/game/info_pc.png" alt="" />
        </picture>
      </div>
      <div className="how_to_play_title">
        <span>How to PLAY</span>
        <p></p>
      </div>
      <div className="how_to_list_section">
        <div className="how_to_install">
          <div className="how_to_wrap">
            <div className="how_to_left">
              <span className="how_symbol" />{" "}
              <span className="how_title">How to install the game</span>
            </div>
            <span className="how_arrow" />
          </div>
        </div>
        <div className="how_to_wallet">
          <div className="how_to_wrap">
            <div className="how_to_left">
              <span className="how_symbol" />{" "}
              <span className="how_title">How to install the wallet</span>
            </div>
            <span className="how_arrow" />
          </div>
        </div>
        <div className="how_to_game">
          <div className="how_to_wrap">
            <div className="how_to_left">
              <span className="how_symbol" />{" "}
              <span className="how_title">How to run the game</span>
            </div>
            <span className="how_arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
