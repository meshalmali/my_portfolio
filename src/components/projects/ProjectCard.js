import React from "react";
import "./Projects.css";

function ProjectCard({ src, text, label, path }) {
  return (
    <>
      <li className="projectCard">
        <a
          className="projectCard_link"
          href={path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="projectCard_picWrap" category={label}>
            <img src={src} className="projectCard_img" />
          </figure>
          <div className="projectCard_info">
            <h5 className="projectCard_text">{text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default ProjectCard;
