import React from "react";

const Footer = (props) => {
  return (
    <footer className="#ef5350 red lighten-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
