import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getChapter } from '../../services/ChapterService';
import { deleteSurvey } from '../../services/SurveyService';
import { toastError, toastSuccess } from '../../services/ToastService/ToastService';

const SurveyDetails = () => {

  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const navigateTo = useNavigate();


  const fetchSurvey = async (id) => {
    try {
      const response = await getChapter(id);
      setSurvey(response.data);
    } catch (error) {
      console.log(error);
      toastError("Error Loading Surveys");
      setSurveys([]);
    }
  }

  const handleDelete = async ( id ) => {
    try {
      await deleteSurvey(id);
      toastSuccess("Survey deleted successfully");
      navigateTo("/dashboard/update-survey");
    } catch (error) {
      console.error(error);
      toastError("Error deleting survey");
    }
  };

  const handleQuestionChange = (qIndex, e) => {
    const { value } = e.target;
    setSurvey(prevSurvey => {
      const updatedQuestions = [...prevSurvey.questions];
      updatedQuestions[qIndex].questionText = value;
      return { ...prevSurvey, questions: updatedQuestions };
    });
  };

  const handleOptionChange = (qIndex, oIndex, e) => {
    const { value } = e.target;
    setSurvey(prevSurvey => {
      const updatedQuestions = [...prevSurvey.questions];
      updatedQuestions[qIndex].options[oIndex].optiontext = value;
      return { ...prevSurvey, questions: updatedQuestions };
    });
  };

  useEffect(() => {
    fetchSurvey(id);
  }, [id]);

  if (!survey) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{survey.chapterTitle}</h1>
      {survey.questions.map((question, qIndex) => (
        <div key={question.id} className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {question.responseType === "Texto Libre" ? (
              <textarea
                value={question.questionText}
                onChange={(e) => handleQuestionChange(qIndex, e)}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              />
            ) : (
              <input
                type="text"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(qIndex, e)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            )}
          </label>
          {question.responseType !== "Texto Libre" && question.options.map((option, oIndex) => (
            <div key={option.id} className="flex items-center mb-2">
              <input
                type="text"
                value={option.optiontext}
                onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                className="w-full p-2 border border-gray-300 rounded-md mr-2"
              />
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={handleDelete}
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Eliminar Survey
      </button>
    </div>

  );
}

export default SurveyDetails