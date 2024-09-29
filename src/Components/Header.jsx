import React from "react";

const headerStyle = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  background: "rgba(255,255,255,0.75)",
  padding: "1rem",
  top: 0,
  width: "100%",
  zIndex: 10,
};

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  fontSize: "1rem",
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <a href="#home" style={linkStyle}>Home</a>
      <a href="#about" style={linkStyle}>About</a>
      <a href="#portfolio" style={linkStyle}>Portfolio</a>
      <a href="#footer" style={linkStyle}>Contact</a>
    </div>
  );
};

export default Header;
