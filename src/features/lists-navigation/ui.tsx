import { TasksSettingsBtn } from "../../components/TasksSettingsBtn";
import { useStateContext } from "../../shared";

export const ListNavigation = () => {
  const { setTasksState } = useStateContext();

  return (
    <div className="py-4 flex justify-around gap-4 border-y-2">
      <TasksSettingsBtn
        text="All"
        handleClick={() => setTasksState("all")}
        active
      />
      <TasksSettingsBtn
        text="In Work"
        handleClick={() => setTasksState("inwork")}
      />
      <TasksSettingsBtn text="Done" handleClick={() => setTasksState("done")} />
    </div>
  );
};
