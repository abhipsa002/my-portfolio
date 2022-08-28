import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="prompt-footer">
        <LinkedInIcon/>
        <p> &copy; 2022 abhipsa.com</p>
      </div>
    </div>
  );
}

export default Footer;
