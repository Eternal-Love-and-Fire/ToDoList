import React, { createContext, useContext, useState } from "react";
import { TaskModel } from "../../../models/TaskModel";
import { TasksStateModel } from "../../../models/TasksStateModel";
import {
  ContextInitialStateModel,
  initialContextState,
} from "./contextInitialState";

const StateContext =
  createContext<ContextInitialStateModel>(initialContextState);

interface ContextProviderProps {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TaskModel[] | null>(null);
  const [tasksState, setTasksState] = useState<TasksStateModel>("all");

  return (
    <StateContext.Provider
      value={{ tasks, setTasks, tasksState, setTasksState }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
