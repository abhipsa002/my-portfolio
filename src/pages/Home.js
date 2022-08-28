import React from "react";
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Abhipsa Mohapatra</h2>
        <div className="prompt">
          <p>Software Enginner with a passion of learning and developing!!</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h5>Front-End</h5>
            <span>React JS,Angular</span>
          </li>
          <li className="item">
            <h5>Back-End</h5>
            <span>Java</span>
          </li>
          <li className="item">
            <h5>Languages</h5>
            <span>Java,Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
