import React from 'react'
import "./Survey.css";
import { Link } from 'react-router-dom'

const Survey = ({ dataSurvey }) => {

    return (
        <Link 
            to={`/dashboard/view-survey/${dataSurvey.id}`} 
            className="block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
        >
            <div className="p-4 mt-2">
                <h2 className="text-xl font-semibold text-gray-800">ID: {dataSurvey.id}</h2>
                <h2 className="text-2xl font-bold text-gray-900 mt-2">{dataSurvey.name}</h2>
                <p className="text-gray-600 mt-2">{dataSurvey.description}</p>
            </div>
        </Link>
    )
}

export default Survey