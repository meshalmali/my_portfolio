import React from "react";
import "./ProjectCard.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Check out some of my Projects</h1>
      <div className="projects_container">
        <div className="projects_wrapper">
          <ul className="projects_cards">
            <ProjectCard
              src="/projects/noogle.png"
              text="A Google clone written in React using Context API, Material UI and Google's custom search API"
              label="Noogle"
              path="https://noogle-995bb.web.app"
            />
            <ProjectCard
              src="/projects/pexels-marta-branco.jpg"
              text="A basic cryptocurrency finance price tracker built with React using the Coingecko cryptocurrency data API"
              label="Crypto Price Tracker"
              path="https://crypto-price-tracker-d13e9.web.app"
            />
          </ul>
          <ul className="projects_cards">
            <ProjectCard
              src="/projects/spotify.png"
              text="A Spotify Web clone written in React and includes user authentication using the popular Spotify Web API"
              label="Spotify Clone"
              path="https://spotify-web-clone-a508d.web.app"
            />
            <ProjectCard
              src="/projects/weChat.png"
              text="A Web Chat Application written in React using Context API and realtime database configured with Firestore."
              label="Chat App"
              path="https://chat-application-e0f03.web.app"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
