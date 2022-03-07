import { useState } from "react";
import "./Grocery.css";

export const GroceryInput = ({ handleClick }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        className="input"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Add Groceries"
      />
      <button
        className="add"
        onClick={() => {
          handleClick(text);
        }}
      >
        Add Item
      </button>
    </div>
  );
};
