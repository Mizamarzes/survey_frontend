import React, { useState } from "react";
import { saveSurvey } from "../../services/SurveyService";
import {
  toastError,
  toastSuccess,
} from "../../services/ToastService/ToastService";
import ChapterForm from "./ChapterForm";
import "./Survey.css";

const SurveyForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentSurvey, setCurrentSurvey] = useState(null); // Estado para almacenar encuestas

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && description) {
      try {
        const newSurvey = { name: title, description: description };
        const response = await saveSurvey(newSurvey); // Llamada al servicio para guardar la encuesta y obtener el ID
        // console.log(response);
        toastSuccess("Survey saved with ID: " + response);

        // Crear un objeto completo con el `id`, `name`, y `description`
        const createdSurvey = {
          id: response, // ID devuelto por el backend
          name: title, // Mantener el título desde el frontend
          description: description, // Mantener la descripción desde el frontend
        };

        // Guardar la encuesta en el estado
        setCurrentSurvey(createdSurvey);

        // Limpiar los campos del formulario

        // Resetear el formulario después de guardar la encuesta
        setTitle("");
        setDescription("");
      } catch (error) {
        console.error("Error saving survey:", error);
        toastError("Failed to save survey. Please try again.");
      }
    } else {
      toastError("Please fill in all fields!");
      return;
    }
  };
  return (
    <div className="w-4/5 flex flex-col ">
      <form className="w-full space-y-6" onSubmit={handleSubmit}>
        <div className="w-full">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
            {/* <FaUserShield className="text-gray-500 mr-3" /> */}
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Enter survey title"
              className="bg-transparent flex-grow outline-none text-gray-700"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
            {/* <BsFillShieldLockFill className="text-gray-500 mr-3" /> */}
            <input
              type="text"
              id="description"
              value={description}
              placeholder="Enter survey description"
              className="bg-transparent flex-grow outline-none text-gray-700"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-500 hover:text-gray-700"
        >
          Create Survey
        </button>
      </form>

      {/* Mostrar la última encuesta creada */}
      {currentSurvey && (
        <div className="mt-8 p-4 max-w-lg flex flex-col justify-center shadow-md text-base bg-white text-lime-600 rounded-lg">
          {/* Mostrar ID */}
          <h3 className="text-2xl font-semibold">
            Survey ID: {currentSurvey.id}
          </h3>
          {/* Mostrar Título */}
          <h3 className="pt-4 pl-4 pr-4 text-lg text-gray-600 font-semibold">
            {currentSurvey.name}
          </h3>
          {/* Mostrar Descripción */}
          <p className="pl-4 pr-4 text-center text-gray-600 mb-2">
            {currentSurvey.description}
          </p>
          <ChapterForm surveyId={currentSurvey.id} /> {/* Pasar el surveyId */}
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
