import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [filterBy, setFilterBy] = useState('All')
  const changeFilter = (e) => {
      setFilterBy(e.target.value)
    }

    const filteredItems = items.filter((item)=>filterBy === "All" ? true : item.category ===filterBy)
    
    // console.log(myItems)
    return (
      <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;