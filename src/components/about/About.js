import React from "react";
import "./About.css";
import "../../App.css";
import Navbar from "../header/Navbar";

function About() {
  return (
    <div className="about" id="about">
      <Navbar />
      <div className="about-info">
        <div className="about_left">
          <div className="about_img">
            <img src="/meee.jpg" />
          </div>
        </div>
        <div className="about_right">
          <div className="about_right_wrapper">
            <h2>Hi there! This is</h2>
            <h2>Shalmali Bhave </h2>
            <h3>
              I am a working IT professional. Keen to secure a position as a
              Software Developer where there is every oppurtunity to constantly
              learn, grow and deliver. When I am not working I love to bury
              myself in novels or dance or swim. I also try my hand at poetry.
              And before you ask, yes I am a dog person :)
            </h3>
          </div>
        </div>
      </div>
      <div class="social-icons" style={{ margin: 40 }}>
        <a
          class="social-icon-link github"
          href="https://github.com/meshalmali"
          target="_blank"
          aria-label="Github"
        >
          <i class="fab fa-github" />
        </a>
        <a
          class="social-icon-link instagram"
          href="https://www.instagram.com/shalmalibhave/?target_user_id=35819792784&utm_source=instagram&utm_medium=email&utm_campaign=find_friend_activity_email&click_source=header_profile&__bp=1"
          target="_blank"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram" />
        </a>

        <a
          class="social-icon-link medium"
          href="https://medium.com/@shalmali.bhave99"
          target="_blank"
          aria-label="Medium"
        >
          <i class="fab fa-medium" />
        </a>
        <a
          class="social-icon-link LinkedIn"
          href="https://in.linkedin.com/in/shalmali-bhave-601113163"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
}

export default About;
