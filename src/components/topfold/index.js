import React, { useState } from "react";
import "./styles.scss";
import { IoIosArrowBack } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const path = window.location.pathname;
  return path === "/" ? (
    <div className="topfold-container">
      <div className="search-bar">
        <input placeholder="Search" onChange={handleQuery} value={query} />
      </div>
      <Link to="/add-expense">
        <div className="add-button">
          <button className="add-button-style">Add </button>
        </div>
      </Link>
    </div>
  ) : (
    <div className="add-topfold">
      <Link to="/">
        <div className="add-topfold-button">
          <IoIosArrowBack />
          <label>Back</label>
        </div>
      </Link>
      <Link to="/">
        <div className="add-topfold-button">
          <label>Cancel</label>
          <GiCancel />
        </div>
      </Link>
    </div>
  );
};

export default TopFold;
