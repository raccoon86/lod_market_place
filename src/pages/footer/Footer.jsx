import "./Footer.css";

function Footer() {
  const goToTwitter = () => {
    document.location.href = "https://twitter.com/Global_LoD";
  };

  const goToDiscord = () => {
    document.location.href = "https://discord.gg/lordofdragons";
  };

  const goToMedium = () => {
    document.location.href = "https://medium.com/@Global_LoD";
  };

  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageWebSite = () => {
    document.location.href = "https://lordofdragons.io/";
  };
  return (
    <footer className="footer">
      <a className="footer_logo" onClick={pageWebSite}></a>
      <div className="sns_section">
        <div className="company_info">SOTEM MOBILE Co., Ltd.</div>
        <div className="sns_link_section">
          <a className="twitter" onClick={goToTwitter}></a>
          <a className="discord" onClick={goToDiscord}></a>
          <a className="medium" onClick={goToMedium}></a>
        </div>
      </div>
      <a className="btn_top" onClick={pageUp}></a>
    </footer>
  );
}

export default Footer;
