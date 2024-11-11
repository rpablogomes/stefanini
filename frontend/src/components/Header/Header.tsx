import React from "react";
import { useNavigate } from "react-router-dom";

import "./Header.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        src="https://stefanini.com/pt-br/wp-content/uploads/sites/3/2022/07/stefanini_logo-1.png"
        alt="Stefanini Logo"
        className="header-logo"
      />
      <div>
        <button className="button" onClick={() => navigate("/logs")}>
          Go to Logs
        </button>
        <button className="button" onClick={() => navigate("/movies")}>
          Go to Home
        </button>
      </div>
    </header>
  );
};

export default Header;
