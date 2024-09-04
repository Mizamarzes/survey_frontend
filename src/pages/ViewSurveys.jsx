import { useState, useEffect} from 'react'
import SurveyList from '../Components/Survey/SurveyList'
import { getAllSurveys, getSurvey } from '../services/SurveyService';

import { toastError, toastSuccess } from "../services/ToastService/ToastService";


const ViewSurveys = () => {
    // const [data, setData] = useState({});
    // const [currentPage, setCurrentPage] = useState(0);
    // const [showSurveyList, setShowSurveyList] = useState(false); // Nuevo estado para mostrar/ocultar

    const [ surveys, setSurveys] = useState([])

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

    const fetchAllSurveys = async (page = 0, size = 10) => {
        try {
            const response = await getAllSurveys(page, size);
            setSurveys(response.data);
            toastSuccess("Success Loading Surveys")
        } catch (error) {
            console.log(error);
            toastError("Error Loading Surveys");
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
            <SurveyList data={surveys} />
        </div>
    )
}

export default ViewSurveys