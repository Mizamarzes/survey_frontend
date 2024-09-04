import React from 'react'
import Survey from "./Survey";
import { getAllSurveys, getContacts } from '../../services/SurveyService';
import { Link } from 'react-router-dom';

const SurveyList = ({ data }) => {

    console.log(data);
    
    return (
        <div>
            {data?.length === 0 && <div>Loading....</div>}

            <ul>
                {data?.length > 0 && data?.map(survey => <Survey dataSurvey={survey} key={survey.id} />)}
            </ul>

            {/* {data?.length > 0 && data?.totalPages > 1 &&
            <div>
                <a onClick={() => getAllContacts(currentPage - 1)} className={0 === currentPage ? 'disabled' : ''}>&laquo;</a>

                { data && [...Array(data.totalPages).keys()].map((page, index) => 
                    <a onClick={() => getAllContacts(page)} className={currentPage === page ? 'active' : ''} key={page}>{page + 1}</a>)}


                <a onClick={() => getAllContacts(currentPage + 1)} className={data.totalPages === currentPage + 1 ? 'disabled' : ''}>&raquo;</a>
            </div>            
            } */}

            {/* {data.map(survey => (
                <div key={survey.id}>
                    <h2>{survey.id}</h2>
                    <h2>{survey.name}</h2>
                    <p>{survey.description}</p>
                </div>
            ))} */}
        </div>
    )
}

export default SurveyList 