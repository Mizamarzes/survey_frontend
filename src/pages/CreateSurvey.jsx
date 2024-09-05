import { useState } from "react";
import SurveyForm from "../Components/Survey/SurveyForm";
import "../Components/Survey/Survey.css";

const CreateSurvey = () => {
  const [surveys, setSurveys] = useState([]);

  const addSurvey = (newSurvey) => {
    setSurveys([...surveys, newSurvey]);
  };

  return (
    <div className="flex flex-col p-8 lg:w-1/2">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-semibold">Surveys Dashboard</h1>
      </div>
      <SurveyForm addSurvey={addSurvey} />
    </div>
  );
};

export default CreateSurvey;
