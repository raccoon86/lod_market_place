import '../detail/Detail.css';
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer'; 
export default function detail() {
  return (
    <div className="main">
        <Header/>
        <span className='welcome_msg'>Welcome to the LOD MarketPlace</span>
        <span className='sub_msg'>Here you can search and buy item to enrich your collection</span>

        <div className='detail_card_section'>
            <div className='back_section'>
                <div className='back_image'/>
                <span>Back</span>
            </div>
            <div className='detail_card'>
                <div className='character_image'/>
                <div className='detail_character_info'>
                    <div className='character_name_section'>
                        <span className='name'>Fated Judge</span>  <span className='code_number'>#3390</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
