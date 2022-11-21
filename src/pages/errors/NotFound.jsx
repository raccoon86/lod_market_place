import React from "react";
import "./Error.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const NotFound = () => {
  return (
    <div className="main">
      <Header cursor="marketplace" />
      <section>
        <div className="error_section">
          <h1>404 NOT FOUND</h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
