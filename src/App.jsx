import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import { ToastContainer } from 'react-toastify';

// pages
import Home from "./pages/Home";
import UpdateSurvey from "./pages/UpdateSurvey";
import CreateSurvey from "./pages/CreateSurvey";
import ViewSurveys from "./pages/ViewSurveys";

// Import React react dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SurveyDetails from "./Components/Survey/SurveyDetails";


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
      { path: "home", element: <Home />},
      { path: "view-survey", element: <ViewSurveys />},
      { path: "create-survey", element: <CreateSurvey />},
      { path: "update-survey", element: <UpdateSurvey />},
      { path: "view-survey/:id", element: <SurveyDetails /> }
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
