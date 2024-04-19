import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useStateContext } from "../../shared";
import { TaskModel } from "../../models/TaskModel";
import { ModalAddTasks } from "../../components/ModalAddTasks";

export const TasksOptions = () => {
  const { tasks, setTasks } = useStateContext();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDeleteClick = () => setTasks(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTask = (event: any) => {
    event.preventDefault();

    const newTask: TaskModel = {
      title: event.currentTarget.title.value,
      body: event.currentTarget.body.value,
      id: tasks ? tasks.length + 1 : 1,
      state: "all",
    };

    const newTasks = tasks ? [...tasks, newTask] : [newTask];
    setTasks(newTasks);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <ModalAddTasks setShowModal={setShowModal} addTask={addTask} />
      )}

      <div className="flex justify-around text-3xl">
        <button
          onClick={() => setShowModal(!showModal)}
          className="p-2 border-2 rounded-full hover:opacity-50 active:opacity-80 duration-300"
        >
          <IoMdAdd />
        </button>
        <button
          onClick={handleDeleteClick}
          className="p-2 border-2 rounded-full hover:opacity-50 active:opacity-80 duration-300"
        >
          <MdDelete />
        </button>
        <Link
          to={"/"}
          className="p-2 border-2 rounded-full hover:opacity-50 active:opacity-80 duration-300"
        >
          <FaGithub />
        </Link>
      </div>
    </>
  );
};
