import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getChapter } from '../../services/ChapterService';

const SurveyDetails = () => {

  const { id } = useParams();
  const [survey, setSurvey] = useState(null);


  const fetchSurvey = async (id) => {
    try {
      const response = await getChapter(id);
      setSurvey(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toastError("Error Loading Surveys");
      setSurveys([]);
    }
  }

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
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              />
            ) : (
              <input
                type="text"
                value={question.questionText}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            )}
          </label>
          {question.responseType !== "Texto Libre" && question.options.map((option, oIndex) => (
            <div key={option.id} className="flex items-center mb-2">
              <input
                type="text"
                value={option.optiontext}
                className="w-full p-2 border border-gray-300 rounded-md mr-2"
              />
            </div>
          ))}
        </div>
      ))}
    </div>

  );
}

export default SurveyDetails