import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometer.module.scss";
import { useEffect, useState } from "react";

interface Props {
  selectedTask: ITask | undefined;
  endTask: () => void;
}

export default function Cronometer({ selectedTask, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selectedTask?.time) setTime(timeToSeconds(selectedTask.time));
  }, [selectedTask]);

  function regressor(counter: number = 0): void {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressor(counter - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className={style.cronometer}>
      <p className={style.title}>Choose a card and start the cronometer</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressor(time)}>Start!</Button>
    </div>
  );
}
