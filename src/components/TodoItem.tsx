import React from "react";
import TodoCheckbox from "./TodoCheckbox";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onChange: (todo: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onChange,
}) => {
  const [inEdit, setEdit] = React.useState<boolean>(false);
  const [editValue, setEditValue] = React.useState<string>(todo.text);

  const onEditClick = () => {
    inEdit ? editComplete() : setEdit(true);
  };

  const toggleComplete = () => {
    const update = { ...todo };
    update.complete = !todo.complete;
    onChange(update);
  };

  const editComplete = () => {
    const update = { ...todo };
    update.text = editValue;
    onChange(update);
    setEdit(false);
  };

  return (
    <div className="todoItem">
      <TodoCheckbox checked={todo.complete} onToggle={toggleComplete} />
      {inEdit ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={editComplete}
        />
      ) : (
        <div>{todo.text}</div>
      )}

      <div className="button-panel">
        <button className="btn" onClick={onEditClick}>
          <i className="fa fa-edit fa-lg"></i>
        </button>
        <button
          className="btn"
          onClick={() => onDelete(todo.id)}
        >
          <i className="fa fa-times fa-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
