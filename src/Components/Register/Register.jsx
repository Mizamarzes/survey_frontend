import React, { useState } from "react";
import "./Register.css";
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

const Register = () => {
  // UseState to hold our inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTo = useNavigate();

  // Onclick let us get what the user has entered
  const createUser = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Validaciones
    if (!username || !password || !confirmPassword) {
      toastError("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      toastError("Passwords do not match!");
      return;
    }

    // Si las credenciales son correctas, hacemos la petición al backend para crear al usuario
    try {
      await Axios.post("http://localhost:8080/auth/register", {
        username: username,
        password: password,
        roles: ["USER"], // Si el backend requiere un campo roles, puedes asignar un valor predeterminado
      });

      toastSuccess("Registration successful!");
      navigateTo("/");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Si el servidor devuelve 400 (solicitud incorrecta)
        toastError("Registration failed: " + error.response.data.message);
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

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <div className="textDiv">
            <h2 className="title">Create and Answer Extraordinary Surveys</h2>
            <p>
              A well-designed survey is the key to unlocking valuable insights!
            </p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form grid" onSubmit={createUser}>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
