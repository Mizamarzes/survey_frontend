import React, { useState } from "react";
import "./Login.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { toastError, toastSuccess } from "../ToastService/ToastService";

// Import our assets
import logo from "../../LoginAssets/logo.png";

// Import our icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  // UseState Hook to store inputs
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate();

  // Onclick let us get what the user has entered
  const loginUser = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    if (!loginUsername || !loginPassword) {
      // If credential don't match
      toastError("Please enter both Username and Password!");
      navigateTo("/"); // Navigate to the same login page
      return;
    }

    // Si las credenciales son correctas, hacemos la petición al backend para logear al usuario
    try {
      const response = await Axios.post("http://localhost:8080/auth/login", {
        username: loginUsername,
        password: loginPassword,
      });

      if (response.status === 200) {
        // Si la autenticación es exitosa
        toastSuccess("You have successfully logged in");
        navigateTo("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        // Si el servidor devuelve 403 (credenciales incorrectas)
        toastError("Invalid credentials. Please try again.");
      } else if (error.response) {
        // Si hay otro error desde el servidor
        toastError("An error occurred: " + error.response.data.message);
      } else if (error.request) {
        // Si no se recibe respuesta del servidor
        toastError("No response from the server. Please try again later.");
      } else {
        // Si ocurrió un error al configurar la solicitud
        toastError(
          "An error occurred while setting up the request. Please try again."
        );
      }
    }
  };

  // Lets clear the form on submit
  const onSubmit = () => {
    setLoginUsername("");
    setLoginPassword("");
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <div className="textDiv">
            <h2 className="title">Create and Answer Extraordinary Surveys</h2>
            <p>
              A well-designed survey is the key to unlocking valuable insightse!
            </p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid" onSubmit={onSubmit}>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setLoginUsername(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
