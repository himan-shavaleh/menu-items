// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import menu from "./data";
import Menu from "./Components/Menu";
import Categories from "./Components/Categories";
const categories = ["all", ...new Set(menu.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const filterItems = (catName) => {
    if (catName === "all") {
      return;
    }
    // console.log(catName);
    const newItems = menu.filter((item) => {
      console.log(item.category);
      return item.category === catName})
    setMenuItems(newItems);
  };
  return (
    <main>
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
      <Categories cats={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
