import React from "react";
import "./Categories.css";
const Categories = ({ cats, filterItems }) => {
  return (
    <ul className="btn-container">
      {cats.map((cat, index) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterItems(cat)}
            key={index}
          >
            {cat}
          </button>
        );
      })}
    </ul>
  );
};

export default Categories;
