import React from 'react';

export default function GameInfo() {
  return (
            <div className='game_info_section'>
                <div className='download_title'>
                    <span>Download</span>
                </div>
                <div className='download_info'/>
                <div className='how_to_play_title'>
                    <span>How to PLAY</span>
                    <p></p>
                </div>
                <div className='how_to_list_section'>
                    <div className='how_to_install'>
                        <span className='how_symbol'/> <span className='how_title'>How to install the game</span><span className='how_arrow'/>
                    </div>
                    <div className='how_to_wallet'>
                        <span className='how_symbol'/> <span className='how_title'>How to install the wallet</span><span className='how_arrow'/>
                    </div>
                    <div className='how_to_game'>
                        <span className='how_symbol'/> <span className='how_title'>How to run the game</span><span className='how_arrow'/>
                    </div>
                </div>
            </div> 
  )
}
