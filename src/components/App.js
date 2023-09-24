import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../context/QuizProvider";

export default function App() {
  const {
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
    dispatch,
    numberQuestions,
    maxPoints,
  } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numberQuestions={numberQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numberQuestions={numberQuestions}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numberQuestions={numberQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finish" && (
          <FinishScreen
            points={points}
            maxPoints={maxPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
