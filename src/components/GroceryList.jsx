import "./Grocery.css";

export const GroceryList = ({ title, id, del }) => {
  return (
    <div>
      <span className="p">{title}: </span>
      <button
        className="btn"
        onClick={() => {
          del(id);
        }}
      >
        Del
      </button>
    </div>
  );
};
