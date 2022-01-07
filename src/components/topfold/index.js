import React, { useState } from "react";
import "./styles.scss";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="topfold-container">
      <div className="search-bar">
        <input placeholder="Search" onChange={handleQuery} value={query} />
      </div>
      <div className="add-button">
        <button className="add-button-style">Add New List</button>
      </div>
    </div>
  );
};

export default TopFold;
