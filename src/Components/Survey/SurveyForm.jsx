import React, { useState } from "react";
import ChapterForm from "./ChapterForm";
import { saveSurvey } from "../../services/SurveyService";
import {
  toastError,
  toastSuccess,
} from "../../services/ToastService/ToastService";
import "./Survey.css";

const SurveyForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [surveys, setSurveys] = useState([]); // Estado para almacenar encuestas
  const [error, setError] = useState(null); // Para manejar errores

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      try {
        const newSurvey = { name: title, description: description };
        const response = await saveSurvey(newSurvey); // Llamada al servicio para guardar la encuesta y obtener el ID
        const surveyId = response // Asumiendo que el ID viene en `response.data.id`

        // Añadir la nueva encuesta al estado de encuestas
        setSurveys((prevSurveys) => [
          ...prevSurveys,
          { id: surveyId, name: title, description: description },
        ]);

        // Resetear el formulario después de guardar la encuesta
        setTitle("");
        setDescription("");
      } catch (error) {
        console.error("Error saving survey:", error);
        setError("Failed to save survey. Please try again.");
      }
    }
  };
  return (
    <div>
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

        {error && <div className="text-red-500">{error}</div>} {/* Mostrar error si falla */}

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-500 hover:text-gray-700"
        >
          Save Survey
        </button>

        {/* Componente para agregar capítulos */}
        <ChapterForm />
      </form>

      {/* Mostrar las encuestas creadas */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Surveys Created</h2>
        {surveys.length === 0 ? (
          <p>No surveys created yet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {surveys.map((survey) => (
              <li key={survey.id} className="mb-2">
                <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg">{survey.name}</h3>
                  <p>{survey.description}</p>
                  {/* Aquí podrías añadir más funcionalidades como "editar", "eliminar" o "añadir capítulos" */}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SurveyForm;
