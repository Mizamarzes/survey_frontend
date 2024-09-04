import React from 'react'
import "./Survey.css";
import { Link } from 'react-router-dom'

const Survey = ({ dataSurvey }) => {

    return (
        <Link to={`/api/survey/${dataSurvey.id}`}>
            <div key={dataSurvey.id}>
                    <h2>{dataSurvey.id}</h2>
                    <h2>{dataSurvey.name}</h2>
                    <p>{dataSurvey.description}</p>
            </div>
        </Link>
    )
}

export default Survey