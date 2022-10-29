import { useState } from "react";
import { RadioChangeEvent } from "antd";
import uuid from "react-uuid";

import TodoList from "./TodoList";
import Toolbar from "./Toolbar";
import AddForm from "./AddForm";
import TodoContext from "../context/TodoContext";

import { ITodo, Filter } from "../types/types";
import "../styles/style.scss";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = (title: string): void => {
    if (title) {
      setTodos([
        ...todos,
        {
          id: uuid(),
          title,
          complete: false,
        },
      ]);
    }
  };

  const toggleTodo = (id: string): void => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  const removeTodo = (id: string): void => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onFilterChange = (e: RadioChangeEvent): void => {
    setFilter(e.target.value);
  };

  const removeCompleted = (): void => {
    setTodos((todos) => todos.filter((todo) => !todo.complete));
  };

  const value = {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    filter,
    onFilterChange,
    removeCompleted,
  };

  return (
    <TodoContext.Provider value={value}>
      <div className="app">
        <div className="app__header">
          <h1>todos</h1>
        </div>
        <div className="app__main">
          <AddForm />
          <TodoList />
          <Toolbar />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default App;
