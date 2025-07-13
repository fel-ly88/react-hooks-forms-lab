import React, { useState } from "react"; // ✅ Make sure useState is imported
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={setSearch}
        onItemFormSubmit={handleItemFormSubmit}
      />
    </div>
  );
}

export default App;
