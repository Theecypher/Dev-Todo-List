const TodoItem = ({ title, id, completed, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label className="todo_list">
        <input
          type="checkbox"
          onChange={(e) => toggleTodo(id, completed)}
          checked={completed}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="del-btn">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
