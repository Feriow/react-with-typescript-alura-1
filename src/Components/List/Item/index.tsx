import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  isSelected,
  isCompleted,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`
        ${style.item} 
        ${isSelected && style.selectedItem} 
        ${isCompleted && style.completedItem}
      `}
      onClick={() =>
        !isCompleted &&
        selectTask({
          task,
          time,
          isSelected,
          isCompleted,
          id,
        })
      }
    >
      <h3>{task} </h3>
      <span> {time}</span>
      {isCompleted && (
        <span className={style.completed} aria-label="task completed"></span>
      )}
    </li>
  );
}
