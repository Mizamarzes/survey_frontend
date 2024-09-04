import React from 'react'
import "./Survey.css";
import { Link } from 'react-router-dom'

const Survey = ({ survey }) => {

    return (
        <Link to={`/api/survey/${survey.id}`} className="survey_item">
            <div className="survey_header">
                <div>
                    <p>Id: {survey.id}</p>
                    <p>Name: {survey.name.substring(0, 15)}</p>
                    <p>Description: {survey.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Survey