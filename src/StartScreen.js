function StartScreen({ numberQuestions }) {
  return (
    <div className="start">
      <h3>Welcome to the react quiz</h3>
      <p>{numberQuestions} question to test your skill</p>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
