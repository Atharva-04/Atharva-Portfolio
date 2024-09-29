import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

const gradientBackground = {
  background: "linear-gradient(135deg, #4E567E 0%, #D2F1E4 100%)",
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  padding: "20px",
  boxSizing: "border-box",
};

const arrowStyle = {
  height: "2.5rem",
  width: "2.5rem",
  cursor: "pointer",
  marginTop: "1.5rem",
  animation: "bounce 2s infinite",
};

const bounceAnimation = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.875rem;
    }
    img {
      height: 2rem;
      width: 2rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.75rem;
    }
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;

const Home = ({ name, title }) => {
  return (
    <section id="home" style={gradientBackground}>
      <style>{bounceAnimation}</style>
      <div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{name}</h1>
        <h2 style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}>{title}</h2>
        <p style={{ marginTop: "1rem", fontSize: "1rem" }}>
        Full Stack Developer with expertise in MERN stack and blockchain technology. Passionate about building scalable web <br/>applications and exploring innovative solutions in decentralized systems
        </p>
      </div>
      <div>
        <img src={arrowSvg} style={arrowStyle} alt="Scroll down arrow" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Atharva Dhokrat",
  title: "Full Stack Developer",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
