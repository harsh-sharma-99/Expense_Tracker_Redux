import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-icon">
          Xpenser
          <FontAwesomeIcon className="head-icon-margin" icon={faCreditCard} />
        </div>
        <div className="header-link">
          <a
            href="https://github.com/harsh-sharma-99"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon className="head-link-margin" icon={faLink} />
          </a>
          Star
        </div>
      </div>
    </div>
  );
};

export default Header;
