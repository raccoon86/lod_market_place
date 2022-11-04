import './Game.css';
import React, {useEffect , useState }from 'react'
import Pagination from '../pagination/Pagination';

export default function Account() {

    const [posts, setPosts] = useState();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [Selected, setSelected] = useState("");
    const [checkedItems, setCheckedItems] = useState([]);
    const offset = (page - 1) * limit;    
    const [tab, setTab] = useState("game");
    
    useEffect(() => {
    }, [])

    const cards = [
        {id: 1, name: 'Fated Judge', race: 'b', rarity: 'e', price: 502, url:"/images/card/card_01.png"},
        {id: 2, name: 'Son of the Wind', race: 'a', rarity: 'e', price: 502, url:"/images/card/card_02.png"},
        {id: 3, name: 'Queen of the Night', race: 'l', rarity: 'e', price: 502, url:"/images/card/card_03.png"},
        {id: 4, name: 'Devastator', race: 'b', rarity: 'e', price: 502, url:"/images/card/card_04.png"},
        {id: 5, name: 'Storm Crow', race: 'b', rarity: 'sr', price: 502, url:"/images/card/card_05.png"},
        {id: 6, name: 'Director', race: 'a', rarity: 'sr', price: 502, url:"/images/card/card_06.png"},
        {id: 7, name: 'Night Watcher', race: 'l', rarity: 'sr', price: 502, url:"/images/card/card_07.png"},
        {id: 8, name: 'Silver Knight', race: 'b', rarity: 'sr', price: 502, url:"/images/card/card_08.png"},
        {id: 9, name: 'God of Death', race: 'b', rarity: 'sr', price: 502, url:"/images/card/card_09.png"},
        {id: 10, name: 'Demon Hunter', race: 'a', rarity: 'sr', price: 502, url:"/images/card/card_10.png"},
        {id: 11, name: 'Whisper of Dawn', race: 'l', rarity: 'sr', price: 502, url:"/images/card/card_11.png"},
        {id: 12, name: 'Forest Guardian', race: 'b', rarity: 'sr', price: 502, url:"/images/card/card_12.png"},
        {id: 13, name: 'Wind Warrior', race: 'b', rarity: 'r', price: 502, url:"/images/card/card_13.png"},
        {id: 14, name: 'High Ranking Knight', race: 'a', rarity: 'r', price: 502, url:"/images/card/card_14.png"},
        {id: 15, name: 'Swordsman', race: 'l', rarity: 'r', price: 502, url:"/images/card/card_15.png"},
        {id: 16, name: 'Water Purification', race: 'b', rarity: 'r', price: 502, url:"/images/card/card_16.png"},
        {id: 17, name: 'Assassin', race: 'b', rarity: 'r', price: 502, url:"/images/card/card_17.png"},
        {id: 18, name: 'Wizard', race: 'a', rarity: 'r', price: 502, url:"/images/card/card_18.png"},
        {id: 19, name: 'Water Spirit', race: 'l', rarity: 'r', price: 502, url:"/images/card/card_19.png"},
        {id: 20, name: 'Sanctuary Guardian', race: 'b', rarity: 'r', price: 502, url:"/images/card/card_20.png"},
        {id: 21, name: 'Hunter', race: 'b', rarity: 'r', price: 502, url:"/images/card/card_21.png"},
        {id: 22, name: 'Pioneer', race: 'a', rarity: 'r', price: 502, url:"/images/card/card_22.png"},
        {id: 23, name: 'Messenger', race: 'l', rarity: 'n', price: 502, url:"/images/card/card_23.png"},
        {id: 24, name: 'Scout', race: 'b', rarity: 'n', price: 502, url:"/images/card/card_24.png"},
        {id: 25, name: 'Lookout', race: 'l', rarity: 'n', price: 502, url:"/images/card/card_25.png"},
        {id: 26, name: 'Spearhead', race: 'b', rarity: 'n', price: 502, url:"/images/card/card_26.png"},
        {id: 27, name: 'Forest Spirit', race: 'l', rarity: 'n', price: 502, url:"/images/card/card_27.png"},
        {id: 28, name: 'Observer', race: 'b', rarity: 'n', price: 502, url:"/images/card/card_28.png"},
        {id: 29, name: 'Guardian', race: 'l', rarity: 'n', price: 502, url:"/images/card/card_29.png"},
        {id: 30, name: 'Watcher', race: 'b', rarity: 'n', price: 502, url:"/images/card/card_30.png"},
        {id: 31, name: 'Overseer', race: 'l', rarity: 'n', price: 502, url:"/images/card/card_31.png"},
        {id: 32, name: 'Rogue', race: 'b', rarity: 'n', price: 502, url:"/images/card/card_32.png"},
      ];
  return (
            <div className='info_section'>
                <div className='account_info_section'>
                    <span className='account_info_title'>Account Infomation</span>
                    <div className='wallet_connect_section' style={ {display: "none"}}>
                        <div className='button_connect_wallet'/>
                    </div>
                    <div className='wallet_address_title_section'>
                        <div className='wallet'/> <span>Wallet Address</span>
                    </div>
                    <div className='wallet_address_section'>
                        <span className='address_name'>Owner</span>
                        <span className='address'>0xc885f123123122312221e40ffe5</span>
                    </div>
                    <div className='wallet_token_section'>
                        <div className='token_title_section'>
                            <div className='token'/> <span>Token</span>
                        </div>
                        <div className='btn_sync'/>
                    </div>
                    <div className='wallet_info_section'>
                        <div className='account_lort_section'>
                            <span className='lort_title'>Account LORT:</span>
                            <span className='lort_result'>100</span>
                            <div className='button_claim'/>
                        </div>
                        <span className='acccount_line'></span>
                        <div className='account_logt_section'>
                            <span className='logt_title'>Account LOGT:</span>
                            <span className='logt_result'>100</span>
                            <div className='button_claim'/>
                        </div>
                    </div>
                </div>
                <div className='nft_section'>
                        <span className='nft_msg'>NFTs</span>
                        <div className='card_section'>
                            {cards.slice(offset, offset + limit).map(({ id, name, race, rarity,price, url }) => (
                            <article key={id}>
                                <div className='nft_card'>
                                    <div className='nft_card_info' style={{backgroundImage: `url("${url}")`}}>
                                        <div className='nft_card_gradient' >
                                            { rarity === "e" && <div className='nft_level_e'></div> }
                                            { rarity === "sr" && <div className='nft_level_sr'></div> }
                                            { rarity === "r" && <div className='nft_level_r'></div> }
                                            { rarity === "n" && <div className='nft_level_n'></div> }
                                            <div className='nft_character_name'>{name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='button_withdraw'/>
                            </article>
                            ))}
                        </div>
                    <div className='pagination_section'>        
                        <Pagination
                            total={cards.length}
                            limit={limit}
                            page={page}
                            setPage={setPage}
                        />
                    </div>
                </div>
            </div>
  )
}
