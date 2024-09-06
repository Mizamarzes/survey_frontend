import React from 'react'
import Survey from "./Survey";

const SurveyList = ({ data , currentPage, getSurveys }) => {
    
    return (
        <div className="p-4">
            {data?.content?.length === 0 ? (
                <div className="text-center text-gray-500">Loading....</div>
            ) : (
                <>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data?.content?.length > 0 && data.content.map(survey => (
                            <Survey dataSurvey={survey} key={survey.id} />
                        ))}
                    </ul>

                    {data?.content?.length > 0 && data?.totalPages > 1 && (
                        <div className="flex justify-center items-center mt-4 space-x-2">
                            <button 
                                onClick={() => getSurveys(currentPage - 1)} 
                                className={`px-4 py-2 border rounded-lg ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                disabled={currentPage === 0}
                            >
                                &laquo;
                            </button>
                            
                            {data && [...Array(data.totalPages).keys()].map(page => (
                                <button 
                                    onClick={() => getSurveys(page)} 
                                    className={`px-3 py-1 border rounded-lg ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'}`} 
                                    key={page}
                                >
                                    {page + 1}
                                </button>
                            ))}

                            <button 
                                onClick={() => getSurveys(currentPage + 1)} 
                                className={`px-4 py-2 border rounded-lg ${data.totalPages === currentPage + 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                disabled={data.totalPages === currentPage + 1}
                            >
                                &raquo;
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default SurveyList 