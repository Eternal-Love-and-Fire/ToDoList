import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ListNavigation, Task, TasksOptions } from "../features";
import { useStateContext } from "../shared";

export const Root = () => {
  const { tasks, tasksState, setTasks } = useStateContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    console.log("Source:", source); // Add console log for source
    console.log("Destination:", destination); // A

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    if (tasks) {
      const updatedTasks = Array.from(tasks);
  
      const [reorderedItem] = updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, reorderedItem);
  
      setTasks(updatedTasks);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="max-w-[640px] min-w-96 p-2 relative flex flex-col gap-4 text-white">
        <h1 className="mt-4 text-center text-4xl font-bold tracking-wider">
          To-Do-Cats
        </h1>
        <TasksOptions />
        <div className="h-full">
          <ListNavigation />
          <ul className=" mt-4 flex flex-col gap-4">
            <Droppable droppableId="taskList">
              {(provided) => (
                <div
                  className="task-list flex flex-col gap-4"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasks?.length
                    ? tasks?.map((task, index) => {
                        if (tasksState === task.state)
                          return (
                            <Task key={task.id} task={task} index={index} />
                          );
                        if (tasksState === "all")
                          return (
                            <Task key={task.id} task={task} index={index} />
                          );
                        return null;
                      })
                    : "Add some tasks, please"}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </ul>
        </div>
      </div>
    </DragDropContext>
  );
};
