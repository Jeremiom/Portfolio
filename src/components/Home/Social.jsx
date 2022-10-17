import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import "./social.css";

function Social() {
  return (
    <div className="sidebar-nav">
      <div className="sidebar-logos">
        <a
          href="mailto:jeremoim.dev@gmail.com"
          className="home_social-icon"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiOutlineMail style={{ fontSize: 30 }}></AiOutlineMail>
        </a>
        <a
          href="https://github.com/jeremiom"
          className="home_social-icon"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiFillGithub style={{ fontSize: 29 }}></AiFillGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/jeremiom"
          className="home_social-icon"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiFillLinkedin style={{ fontSize: 31 }}></AiFillLinkedin>
        </a>
      </div>
    </div>
  );
}

export default Social;
