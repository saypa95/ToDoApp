import { useContext } from "react";
import { Button, Radio} from "antd";

import TodoContext from "../context/TodoContext";

const Toolbar: React.FC = () => {
  const {onFilterChange, removeCompleted} = useContext(TodoContext);

  return <div className="app__toolbar">
    <Radio.Group onChange={onFilterChange} defaultValue="all">
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="active">Active</Radio.Button>
      <Radio.Button value="completed">Completed</Radio.Button>
    </Radio.Group>
    <Button onClick={removeCompleted}>Clear completed</Button>
  </div>;
};

export default Toolbar;
