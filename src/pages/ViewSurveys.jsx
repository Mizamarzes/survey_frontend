import { useState, useEffect} from 'react'
import SurveyList from '../Components/Survey/SurveyList'
import { getAllSurveys } from '../services/SurveyService';

const ViewSurveys = () => {

    const [data, setData] = useState({});
    const [currentPage, setCurrentPage] = useState(0);

    const getSurveys = async (page = 0, size = 10) => {
        try {
            setCurrentPage(page);
            const { data } = await getAllSurveys(page, size);
            setData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
            toastError(error.message);
        }
    }

    useEffect(() => {
        getSurveys();
    }, []);


    return (
        <div>
            ViewSurveys
            <SurveyList data={data} currentPage={currentPage} getAllSurveys={getSurveys} />
        </div>

    )
}

export default ViewSurveys