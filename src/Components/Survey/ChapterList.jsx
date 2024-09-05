import React, { useState } from "react";

const ChapterList = () => {
  const [chapters, setChapters] = useState([]);

  const addChapter = (newChapter) => {
    setChapters([...chapters, newChapter]);
  };

  return (
    <div className="chapter-list">
      <h4>Chapters</h4>
      <ChapterForm addChapter={addChapter} />
      {chapters.map((chapter, index) => (
        <div key={index} className="chapter-item">
          <h5>{chapter.title}</h5>
          <QuestionList chapterId={chapter.id} />
        </div>
      ))}
    </div>
  );
};

export default ChapterList;
