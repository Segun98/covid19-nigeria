import React from "react";

const Header = () => {
  return (
    <section className="header">
      <header>
        <div className="logo">COVID-19 in Nigeria</div>
        <a
          href="https://covid19.ncdc.gov.ng/"
          target="_blank"
          rel="noopener noreferrer"
          className="ncdc-link"
        >
          Visit NCDC
        </a>
      </header>
    </section>
  );
};

export default Header;
