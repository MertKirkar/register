import { createBrowserRouter } from "react-router-dom";
import SignUp from "./Components/SignUp";
import App from "./App";
import Login from "./Components/Login";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },

  { path: "/", element: <App /> },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
