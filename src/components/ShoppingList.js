import React from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";
import Filter from "./Filter";

function ShoppingList({
  items,
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
  onItemFormSubmit,
}) {
  const visibleItems = items
    .filter((item) => {
      return selectedCategory === "All" || item.category === selectedCategory;
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        search={search}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {visibleItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


