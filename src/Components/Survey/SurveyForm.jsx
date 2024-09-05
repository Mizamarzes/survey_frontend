import React, { useState } from 'react';
import ChapterForm from './ChapterForm';

const SurveyForm = ({ addSurvey }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addSurvey({ name: title, description: description });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter survey title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter survey description"
      />
      <button type="submit">Add Survey</button>
      <ChapterForm />
    </form>
  );
};

export default SurveyForm;
