import type { RadioChangeEvent } from 'antd';
import { createContext } from "react";
import { Filter, ITodo } from "../types/types";

interface ITodoContext{
  todos: ITodo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  onFilterChange: (e: RadioChangeEvent) => void;
  removeCompleted: () => void;
  addTodo: (title: string) => void;
  filter: Filter;
}

const TodoContext = createContext<ITodoContext>({
  todos: [],
  toggleTodo: () => {},
  removeTodo: () => {},
  onFilterChange: () => {},
  removeCompleted: () => {},
  addTodo: () => {},
  filter: "all",
});

export default TodoContext;