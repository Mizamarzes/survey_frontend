import React from 'react'
import "./Survey.css";
import { Link } from 'react-router-dom'

const Survey = ({ survey }) => {
    return (
        <Link to={`/api/survey/`} className="survey_item">
            <div className="survey_header">
                <div>
                    <p>{survey.name}</p>
                    <p>{survey.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Survey