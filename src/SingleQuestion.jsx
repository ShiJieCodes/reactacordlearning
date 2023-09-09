import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{isActive ? info : null}</p>
      {/* {showInfo && <p>{info}</p>} */}
    </article>
  );
};
export default SingleQuestion;
