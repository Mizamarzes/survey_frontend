import React, { useState } from "react";
import ChapterForm from "./ChapterForm";
import "./Survey.css"

const SurveyForm = ({ addSurvey }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addSurvey({ name: title, description: description });
      setTitle("");
    }
  };

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit}>
      <div className="w-full">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
          {/* <FaUserShield className="text-gray-500 mr-3" /> */}
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Enter survey title"
            className="bg-transparent flex-grow outline-none text-gray-700"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100">
          {/* <BsFillShieldLockFill className="text-gray-500 mr-3" /> */}
          <input
            type="text"
            id="password"
            value={description}
            placeholder="Enter survey description"
            className="bg-transparent flex-grow outline-none text-gray-700"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-500 hover:text-gray-700"
      >
        Save Survey
      </button>
      <ChapterForm />
    </form>
  );
};

export default SurveyForm;
