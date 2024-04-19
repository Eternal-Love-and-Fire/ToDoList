import { Draggable } from "react-beautiful-dnd";
import { FaRegBookmark } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

import { TaskModel } from "../../models/TaskModel";
import { useStateContext } from "../../shared";

interface TaskProps {
  task: TaskModel;
  index: number
}

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  const { tasks, setTasks } = useStateContext();

  const addState = (state: "all" | "inwork" | "done") => {
    if (tasks) {
      const updatedTasks: TaskModel[] = tasks.map((item) => {
        if (item.id === task.id && item.state === state) {
          return { ...item, state: "all" };
        } else if (item.id === task.id) {
          return { ...item, state };
        }
        return item;
      });
      setTasks(updatedTasks);
    }
  };

  const addInWorkState = () => addState("inwork");

  const addInDoneState = () => addState("done");

  const deleteTask = () => {
    if (tasks) {
      const newTasks: TaskModel[] = tasks.filter(
        (taskItem) => taskItem.id !== task.id
      );
      setTasks(newTasks);
    }
  };

  const taskState = task.state;

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <li className="max-w-84 p-2 flex flex-col gap-3 border rounded-xl">
            <div className="w-full flex justify-between">
              <div className="font-bold tracking-wide">{task.title}</div>
              <div className="pt-2 flex gap-2 items-start text-2xl">
                <button onClick={addInWorkState}>
                  <FaRegBookmark className={`${taskState === "inwork" ? "text-blue-500": ""}`} />
                </button>
                <button onClick={addInDoneState} className={`${taskState === "done" ? "text-blue-500": ""}`}>
                  <IoMdDoneAll />
                </button>
                <button onClick={deleteTask}>
                  <MdDelete />
                </button>
              </div>
            </div>
            <div className="pl-2 opacity-90 break-words">{task.body}</div>
          </li>
        </div>
      )}
    </Draggable>
  );
};
