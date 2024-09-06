import { useState } from "react";
import "../Components/Survey/Survey.css";
import SurveyForm from "../Components/Survey/SurveyForm";

const CreateSurvey = () => {
  const [surveys, setSurveys] = useState([]);

  const addSurvey = (newSurvey) => {
    setSurveys([...surveys, newSurvey]);
  };

  return (
    <div className="mt-8 flex flex-col p-8 bg-white shadow-md rounded-lg lg:w-1/2">
      <div className="mb-8 text-center ">
        <h1 className="text-2xl font-semibold text-gray-700">Surveys Dashboard</h1>
      </div>
      <SurveyForm />
    </div>
  );
};

export default CreateSurvey;
