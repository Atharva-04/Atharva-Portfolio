import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a Full Stack Developer exploring Web3, dedicated to crafting intuitive web applications and sleek user interfaces.";

const skillsList = [
  "Full Stack Developer",
  "Blockchain Developer",
  "API Development",
  "MongoDB",
  "Node.js",
  "React.js",
];

const detailOrQuote =
  "I'm a Full Stack Developer with a passion for building innovative web applications, currently delving into Web3 technologies. I strive to create seamless user experiences through elegant design and efficient coding practices.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          maxWidth: "800px",
          padding: "4rem",
          margin: "2rem auto 3rem",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)", // Added shadow for better depth
          borderRadius: "8px", // Rounded corners for aesthetics
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem auto",
            padding: "0",
            listStyleType: "none", 
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ marginBottom: "1rem" }}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 0 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
