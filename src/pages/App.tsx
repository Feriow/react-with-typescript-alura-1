import React, { useState } from "react";
import Cronometer from "../Components/Cronometer";
import Form from "../Components/Form";
import List from "../Components/List";
import { ITask } from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((pastTasks) =>
      pastTasks.map((task) => ({
        ...task,
        isSelected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function endTask() {
    setSelected(undefined);
    setTasks((pastTasks) =>
      pastTasks.map((task) => {
        if (task.id === selected?.id) {
          return {
            ...task,
            isSelected: false,
            isCompleted: true,
          };
        }
        return task;
      })
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List selectTask={selectTask} tasks={tasks} />
      <Cronometer selectedTask={selected} endTask={endTask} />
    </div>
  );
}

export default App;
