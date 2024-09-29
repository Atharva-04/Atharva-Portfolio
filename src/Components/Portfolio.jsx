import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Course Selling App 📗",
    description:
      "Developed a full-stack application that manages course offerings, featuring secure payment integration and JWT-based authentication.",
    url: "", 
  },
  {
    title: "Meme Palette",
    description:
      "Created an interactive meme generator with image manipulation capabilities, enhancing user engagement.",
    url: "https://memepalette.netlify.app",
  },
  {
    title: "My Resume",
    description:
      "Download my resume to view my experience and design abilities.",
    url: "https://drive.google.com/file/d/1FLkZMWsqfHVYCAV0KpjBcbxinOoQk2tx/view?usp=drive_link", 
  },
  {
    title: "E-Commerce Application 🛒",
    description:
      "Currently in progress, this fully functional e-commerce application features a user-friendly interface, product browsing, a shopping cart, and JWT-based authentication with OAuth for secure user access.",
    url: "", // Add the URL once it's deployed
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
        <div style={{ maxWidth: "40%", flex: "1 1 300px", borderRadius: "8px", overflow: "hidden" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", borderRadius: "8px" }}
            alt={imageAltText}
          />
        </div>
        <div className="container" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ margin: "1rem", textAlign: "center", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", transition: "transform 0.3s" }}>
              <a
                href={project.url || "#"}
                download={project.isDownload ? "Atharva_Resume.pdf" : undefined} // Use the flag to determine if it should download
                target={project.url ? "_blank" : undefined} // Open in a new tab if there's a URL
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3 style={{ flexBasis: "40px", fontSize: "1.25rem", marginBottom: "0.5rem", transition: "color 0.3s", cursor: project.url ? "pointer" : "default" }}>
                  {project.title}
                </h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

