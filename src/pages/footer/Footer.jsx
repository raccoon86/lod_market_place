import './Footer.css';

function Footer() {
  return (
    <div className="footer">
        <a className="footer_logo"></a>
        <div className="sns_section">
            <div className='company_info'>SOTEM MOBILE Co., Ltd.</div>
            <div className='sns_link_section'>
                <a className='twitter'></a>
                <a className='discord'></a>
                <a className='medium'></a>
            </div>
        </div>
        <a className="btn_top"></a>
    </div>
  );
}

export default Footer;