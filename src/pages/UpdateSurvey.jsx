import { useState, useEffect } from 'react'
import SurveyList from '../Components/Survey/SurveyList';
import { getAllSurveys } from '../services/SurveyService';

const UpdateSurvey = () => {

  const [surveys, setSurveys] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchAllSurveys = async (page = 0, size = 6) => {
    try {
      setCurrentPage(page);
      const response = await getAllSurveys(page, size);

      // Verifica que response y response.content no sean undefined y que response.content sea un array
      if (response && Array.isArray(response.content)) {
        setSurveys(response);
      } else {
        console.error('Unexpected response format:', response);
        setSurveys([]);
      }
    } catch (error) {
      console.log(error);
      toastError("Error Loading Surveys");
      setSurveys([]); // Establece un valor predeterminado en caso de error
    }
  }

  useEffect(() => {
    fetchAllSurveys();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Survey</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <SurveyList data={surveys} currentPage={currentPage} getSurveys={fetchAllSurveys} />
      </div>
    </div>
  )
}

export default UpdateSurvey