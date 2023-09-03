function NextButton({ dispatch, answer, index, numberQuestions }) {
  if (answer === null) return null;

  if (index < numberQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        next
      </button>
    );

  if (index === numberQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        finish
      </button>
    );
}

export default NextButton;
