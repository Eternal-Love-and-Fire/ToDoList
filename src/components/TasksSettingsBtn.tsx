import { ButtonModel } from "../models/ButtonModel";

export const TasksSettingsBtn = ({
  handleClick,
  styles,
  text,
  active,
}: ButtonModel) => {
  const activeBtnStyles = active ? "opacity-80 border-gray-300" : "";

  return (
    <button
      onClick={handleClick}
      className={`px-4 border-b-2 border-transparent font-semibold tracking-wide hover:border-white active:opacity-50 duration-300 ${activeBtnStyles} ${styles}`}
    >
      {text}
    </button>
  );
};
