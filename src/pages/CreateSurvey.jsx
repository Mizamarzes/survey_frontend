import { useState } from "react";
import SurveyForm from "../Components/Survey/SurveyForm";

const CreateSurvey = () => {
  const [surveys, setSurveys] = useState([]);

  const addSurvey = (newSurvey) => {
    setSurveys([...surveys, newSurvey]);
  };

  return (
    <div className="dashboard">
      <h1>Surveys Dashboard</h1>
      <SurveyForm addSurvey={addSurvey} />
    </div>
    
  );
};

export default CreateSurvey;
