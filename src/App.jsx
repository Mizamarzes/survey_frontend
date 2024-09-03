import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { ToastContainer } from 'react-toastify';
import UpdateSurvey from "./Components/Survey/pages/UpdateSurvey";
import CreateSurvey from "./Components/Survey/pages/CreateSurvey";

// Import React react dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lets create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
      </div>
    ),
    children: [
      { path: "create-survey", element: <CreateSurvey />},
      { path: "update-survey", element: <UpdateSurvey />}
    ],
  },
  /* path: "/",
    element: <Dashboard />,
    children: [
      // Nested routes
      { path: "dashboard", element: <Dashboard /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ], */
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
