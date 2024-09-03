import React from 'react'

const Survey = ({ survey }) => {
    return (
        <Link to={`/contacts/${survey.id}`} className="contact__item">
            <div className="contact__header">
                <div className="contact__details">
                    <p className="contact_name">{contact.name.substring(0, 15)} </p>
                    <p className="contact_title">{contact.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Survey