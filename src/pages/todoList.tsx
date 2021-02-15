import React from "react";
import ReactTooltip from "react-tooltip";

import {
  deleteTodoAPI,
  fetchTodosAPI,
  addTodoAPI,
  changeTodoAPI,
} from "../services/todoAPIs";

import TodoItem from "../components/TodoItem";

export const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [errorMsg, setErrorMsg] = React.useState<string>('');

  React.useEffect(() => {
    const getTodos = async () => {
      const {status, data} = await fetchTodosAPI();
      if (status!=='ok')
        setErrorMsg(status)
      else
        setTodos(data);
    };
    getTodos();
  }, []);

  const deleteTodo = async (id: string) => {
    setErrorMsg('');
    const { status } = await deleteTodoAPI(id);
    if (status === "ok") {
      const workTodos = todos.filter((td) => td.id !== id);
      setTodos(workTodos);
    } else handleError(status);
  };

  const addNewTodo = async () => {
    setErrorMsg('');
    const { todo, status } = await addTodoAPI("new to do");
    if (status === "ok") setTodos([todo, ...todos]);
    else handleError(status);
  };

  const changeTodo = async (update: Todo) => {
    setErrorMsg('');
    const { todo, status } = await changeTodoAPI(update);
    if (status === "ok") {
      const index = todos.findIndex((td) => td.id === todo.id);
      todos[index] = { ...todo };
      setTodos([...todos]);
    } else handleError(status);
  };

  const handleError = (status: string) => {
    setErrorMsg(`oops, something went wrong on our side (${status}). Try again.`)
    console.log("API error", status);
  };

  return (
    <div className="container-sm todosList">
      <header className="d-flex align-items-center justify-content-center">
        <h1>To Do's</h1>
        <button
          className="btn"
          data-tip="Add a to do task"
          data-place="right"
          onClick={addNewTodo}
        >
          <i className="fa fa-plus-square fa-2x"></i>
        </button>      
      </header>
      { errorMsg && <div className="error-message">{errorMsg}</div>}
      <div className="todos-items-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onChange={changeTodo}
          />
        ))}
      </div>

      <ReactTooltip type="info" />
    </div>
  );
};

export default TodoList;
