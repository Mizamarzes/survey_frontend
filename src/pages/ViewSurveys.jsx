import { useState, useEffect } from 'react'
import { getAllSurveys } from '../services/SurveyService';
import { toastError, toastSuccess } from "../services/ToastService/ToastService";


const ViewSurveys = () => {
    // const [data, setData] = useState({});
    // const [currentPage, setCurrentPage] = useState(0);
    // const [showSurveyList, setShowSurveyList] = useState(false); // Nuevo estado para mostrar/ocultar

    const [surveys, setSurveys] = useState([]);

    // const [survey, setSurvey] = useState({
    //     id: '',
    //     name: '',
    //     chapters: [],
    //     categoriesCatalogs: [],
    //     componenthtml: '',
    //     componentreact: '',
    //     description: ''
    // });

    // const { id } = useParams();



    // const fetchSurvey = async (id) => {
    //     try {
    //         const responseSurvey = await getSurvey(id);
    //         setSurvey(responseSurvey.data); // Aquí corriges la asignación
    //     } catch (error) {
    //         console.log(error);
    //         toastError(error.message);
    //     }
    // };

    useEffect(() => {
        const fetchAllSurveys = async (page = 0, size = 10) => {
            try {
                const response = await getAllSurveys(page, size);

                // Verifica que response y response.content no sean undefined y que response.content sea un array
                if (response && Array.isArray(response.content)) {
                    setSurveys(response.content);
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

        fetchAllSurveys();
    }, []); 


    return (
        <div>
            {surveys.map(survey => (
                <div key={survey.id}>
                    <h2>{survey.id}</h2>
                    <h2>{survey.name}</h2>
                    <p>{survey.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ViewSurveys