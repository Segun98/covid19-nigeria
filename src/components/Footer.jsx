import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "15px 0",
        boxShadow: "var(--box) var(--softgrey)",
      }}
    >
      Made by{" "}
      <a
        href="https://segunos.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Segun
      </a>
    </div>
  );
};

export default Footer;
