import { Button } from "@mui/material";
import React from "react";
import "./Footer.css";
import ScrollTop from "../scrollTop/ScrollTop";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <div className="social-logo">Shalmali Bhave</div>
            <div className="mail">Write to me at</div>
            <div className="mail-address">shalmali.bhave99@gmail.com</div>
          </div>
          <small class="website-rights">© 2022</small>
          <div class="social-icons">
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
      </section>
      <ScrollTop />
    </div>
  );
}

export default Footer;
