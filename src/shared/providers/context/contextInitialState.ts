import { Dispatch, SetStateAction } from "react";

import { TaskModel } from "../../../models/TaskModel";
import { TasksStateModel } from "../../../models/TasksStateModel";

export interface ContextInitialStateModel {
  tasks: TaskModel[] | null;
  tasksState: TasksStateModel;
  setTasksState: Dispatch<SetStateAction<TasksStateModel>>;
  setTasks: Dispatch<SetStateAction<TaskModel[] | null>>;
}

export const initialContextState: ContextInitialStateModel = {
  tasks: null,
  tasksState: "all",
  setTasksState: () => {},
  setTasks: () => {},
};
