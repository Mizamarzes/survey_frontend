import React, { useState } from "react";
import "./Survey.css"

const QuestionForm = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("text"); // Default question type

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addQuestion({ id: Date.now(), text, type });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter question text"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="text">Text</option>
        <option value="multiple-choice">Multiple Choice</option>
        <option value="checkbox">Checkbox</option>
      </select>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;
