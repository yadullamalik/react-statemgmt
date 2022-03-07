import { useState } from "react";
import { v4 as uuid } from "uuid";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import "./Grocery.css";

export const Grocery = () => {
  const [items, setItems] = useState([]);
  const addItem = (data) => {
    const payload = {
      title: data,
      id: uuid(),
    };
    setItems([...items, payload]);
  };
  const del = (id) => {
    const e = items.filter((e) => {
      return e.id !== id;
    });
    setItems(e);
  };
  return (
    <div>
      <h1 id="h1">Groceries</h1>
      <GroceryInput handleClick={addItem} />
      {items.map((e) => (
        <GroceryList title={e.title} id={e.id} del={del} />
      ))}
    </div>
  );
};
