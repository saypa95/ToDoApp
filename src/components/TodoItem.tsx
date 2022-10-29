import { useContext } from "react";
import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import TodoContext from "../context/TodoContext";
import { ITodo } from "../types/types";

const TodoItem: React.FC<ITodo> = ({id, title, complete}) => {
  const { toggleTodo, removeTodo } = useContext(TodoContext);

  const onChange = () => {
    toggleTodo(id);
  };

  return (
    <div className="app__todo-item">
      <Checkbox
        checked={complete}
        onChange={onChange}
        className={`app__todo-item-checkbox ${complete ? "app__todo-item-checkbox_completed" : ""}`}
      >
        {title.length > 45 ? title.slice(0, 45) + "..." : title}
      </Checkbox>
      <Button type="primary" icon={<DeleteOutlined />} onClick={() => removeTodo(id)} />
    </div>
  );
};

export default TodoItem;
