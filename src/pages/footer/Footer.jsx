import './Footer.css';

function Footer() {
  
  const goToTwitter = () => {
    document.location.href = 'https://twitter.com/Global_LoD';
  }

  const goToDiscord = () => {
    document.location.href = 'https://discord.gg/lordofdragons';
  }

  const goToMedium = () => {
    document.location.href = 'https://medium.com/@Global_LoD';
  }

  return (
    <div className="footer">
        <a className="footer_logo"></a>
        <div className="sns_section">
            <div className='company_info'>SOTEM MOBILE Co., Ltd.</div>
            <div className='sns_link_section'>
                <a className='twitter' onClick={goToTwitter}></a>
                <a className='discord' onClick={goToDiscord}></a>
                <a className='medium' onClick={goToMedium}></a>
            </div>
        </div>
        <a className="btn_top"></a>
    </div>
  );
}

export default Footer;