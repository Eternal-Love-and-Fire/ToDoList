import React from "react";
import { CgClose } from "react-icons/cg";

interface ModalAddTasksProps {
  setShowModal: (show: boolean) => void;
  addTask: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const ModalAddTasks: React.FC<ModalAddTasksProps> = ({
  setShowModal,
  addTask,
}) => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 flex z-10 items-center justify-center text-black font-bold bg-[#0000008a]">
      <div className="p-4 border-2 rounded-xl">
        <div className="w-full flex justify-between text-white text-2xl mb-4">
          <h3>Your Task:</h3>
          <button onClick={() => setShowModal(false)}>
            <CgClose className="hover:opacity-80 duration-300" />
          </button>
        </div>
        <form
          className="flex flex-col items-center"
          action=""
          onSubmit={addTask}
        >
          <input
            className="text-xl p-2 mb-4 border-2 bg-black text-white rounded-3xl"
            type="text"
            name="title"
            placeholder="Title:"
          />
          <input
            className="text-xl p-2 mb-4 border-2 bg-black text-white rounded-3xl"
            type="text"
            name="body"
            placeholder="Task Body:"
          />
          <button
            className="bg-black text-white border-2 text-2xl px-10 py-2 rounded-3xl hover:opacity-50 duration-300"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
