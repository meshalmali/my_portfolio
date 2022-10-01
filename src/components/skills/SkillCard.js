import React from "react";
import "./SkillCard.css";

function SkillCard({ src, text }) {
  return (
    <li className="skillCard">
      <div className="card">
        <div className="card_image" title={text}>
          <img src={src} />
        </div>
      </div>
    </li>
  );
}

export default SkillCard;
