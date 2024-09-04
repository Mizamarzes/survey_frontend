import React from 'react'
import Survey from "./Survey";

const SurveyList = ({ data, currentPage, getAllSurveys }) => {
    return (
        <main className='main'>
            {data?.content?.length === 0 && <div>No Survey. Please add a new survey</div>}

            <ul className='survey_list'>
                {data?.content?.length > 0 && data.content.map(survey => <Survey survey={survey} key={survey.id} />)}
            </ul>

            {data?.content?.length > 0 && data?.totalPages > 1 &&
                <div className='pagination'>
                    <a onClick={() => getAllSurveys(currentPage - 1)} className={0 === currentPage ? 'disabled' : ''}>&laquo;</a>

                    {data && [...Array(data.totalPages).keys()].map((page, index) =>
                        <a onClick={() => getAllSurveys(page)} className={currentPage === page ? 'active' : ''} key={page}>{page + 1}</a>)}


                    <a onClick={() => getAllSurveys(currentPage + 1)} className={data.totalPages === currentPage + 1 ? 'disabled' : ''}>&raquo;</a>
                </div>
            }

        </main>
    )
}

export default SurveyList