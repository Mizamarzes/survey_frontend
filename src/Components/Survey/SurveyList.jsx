import React from 'react'
import Survey from "./Survey";

const SurveyList = ({ data , currentPage, getSurveys }) => {
    
    return (
        <div>
            {data?.content?.length === 0 && <div>Loading....</div>}

            <ul>
                {data?.content?.length > 0 && data.content.map(survey => <Survey dataSurvey={survey} key={survey.id} />)}
            </ul>

            {data?.content?.length > 0 && data?.totalPages > 1 &&
            <div>

                { currentPage === 0 ||
                <a onClick={() => getSurveys(currentPage - 1)} className={currentPage === 0 ? 'disabled' : ''}>&laquo;</a>
                }
                
                { data && [...Array(data.totalPages).keys()].map((page, index) => 
                    <a onClick={() => getSurveys(page)} className={currentPage === page ? 'active' : ''} key={page}>{page + 1}</a>)}

                { data.last === true ||
                <a onClick={() => getSurveys(currentPage + 1)} className={data.totalPages === currentPage + 1 ? 'disabled' : ''}>&raquo;</a>
                }
            </div>            
            }

        </div>
    )
}

export default SurveyList 