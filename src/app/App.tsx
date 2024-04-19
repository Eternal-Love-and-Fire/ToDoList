import { RouterProvider } from "react-router-dom";
import { router } from "../pages/router";
import { ContextProvider } from "../shared";

import "./style.css";

export const App = () => {
  return (
    <div className="h-screen bg-black flex justify-center">
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  );
};
