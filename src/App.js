import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading", // this will change over time - loading, error, ready, active, finished
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "dataReceived", payload: data, status: "ready" })
      )
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main className="main">
        <p>1/15</p>
        <p>question</p>
      </Main>
    </div>
  );
}
