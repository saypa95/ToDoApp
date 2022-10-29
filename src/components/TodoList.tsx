import { useContext } from "react";

import TodoItem from "./TodoItem";
import TodoContext from "../context/TodoContext";

const TodoList: React.FC = () => {
  const { filter, todos } = useContext(TodoContext);

  const filteredNotes = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return true;
      case "active":
        return !todo.complete;
      case "completed":
        return todo.complete;
    }
  });

  return (
    <div className="app__todo-list">
      {filteredNotes.map((todo) => (
        <TodoItem key={todo.id} {...todo}/>
      ))}
    </div>
  );
};

export default TodoList;
