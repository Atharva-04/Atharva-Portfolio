import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Atharva Dhokrat",
  title: "Full Stack Developer",
  email: "atharvadhokrat@gmail.com",
  gitHub: "Atharva-04", 
  linkedIn: "atharva-dhokrat", 
  twitter: "hi_Atharva", 
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer
        email={siteProps.email}
        gitHub={siteProps.gitHub}
        linkedIn={siteProps.linkedIn}
        twitter={siteProps.twitter}
        name={siteProps.name}
        primaryColor={primaryColor}
      />
    </div>
  );
};

export default App;
