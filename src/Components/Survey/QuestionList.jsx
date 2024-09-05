import React, { useState } from "react";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="question-list">
      <h5>Questions</h5>
      <QuestionForm addQuestion={addQuestion} />
      {questions.map((question, index) => (
        <div key={index} className="question-item">
          <p>{question.text}</p>
          <p>Type: {question.type}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
