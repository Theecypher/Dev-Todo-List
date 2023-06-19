import { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <h2>New Item</h2>
        <div>
          <label htmlFor="new-item"></label>
          <input
            className="input__text"
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a task"
            value={newItem}
            type="text"
          />
        </div>
        <button className="btn-submit">Add Todo</button>
      </form>
    </>
  );
};

export default NewTodoForm;
