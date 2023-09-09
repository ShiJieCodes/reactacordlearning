import SingleQuestion from "./SingleQuestion";

const Questions = ({ data, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {data.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Questions;
