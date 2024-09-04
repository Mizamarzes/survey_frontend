import { useState, useEffect } from 'react'
import { getAllSurveys } from '../services/SurveyService';
import { toastError, toastSuccess } from "../services/ToastService/ToastService";
import SurveyList from '../Components/Survey/SurveyList';


const ViewSurveys = () => {
    // const [data, setData] = useState({});
    
    // const [showSurveyList, setShowSurveyList] = useState(false); // Nuevo estado para mostrar/ocultar

    const [surveys, setSurveys] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

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

    const fetchAllSurveys = async (page = 0, size = 5) => {
        try {
            setCurrentPage(page);
            const response = await getAllSurveys(page, size);
            
            // Verifica que response y response.content no sean undefined y que response.content sea un array
            if (response && Array.isArray(response.content)) {
                setSurveys(response);
                console.log(response);
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
        

        fetchAllSurveys();
    }, []); 


    return (
        <div>
            <SurveyList data={surveys} currentPage={currentPage} getSurveys={fetchAllSurveys} />
        </div>
    );
}

export default ViewSurveys