import React from "react";
import "./Mneu.css";
const Menu = ({ items }) => {
  const content = items.map((item) => {
    return (
      <li key={item.id} className="menu-item">
        <img src={item.img} alt={item.title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">${item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </li>
    );
  });

  return <ul className="menu">{content}</ul>;
};

export default Menu;
