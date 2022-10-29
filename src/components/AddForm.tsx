import { useContext, useState } from "react";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import TodoContext from "../context/TodoContext";

const AddForm: React.FC = () => {
  const {addTodo} = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") onAdd();
  };

  const onAdd = ():void => {
    addTodo(inputValue);
    setInputValue("");
  }
  
  return (
    <div className="app__add-form">
      <Input
        placeholder="Add new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: "93%" }}
      />
      <Button
        type="primary"
        icon={<PlusOutlined />}
        disabled={!inputValue.length}
        onClick={onAdd}
        style={{ width: "32px" }}
      />
    </div>
  );
};

export default AddForm;
