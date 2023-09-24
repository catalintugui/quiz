function StartScreen({ numberQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h4>{numberQuestions} question to test your skill</h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
