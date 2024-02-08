import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Questions from "./Questions";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  //we define this to take the note of on which answer we are on by using length method
  const activeQuestionIndex = userAnswers.length;

  // this is for checking if we reach the final question
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // this function select answers that the user selects that store them in our USERANSWERs state array that also take the note of the old selected answers
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  },
  []);

  // its is working as if the answer is not selected
  const handleSkipAnswer = useCallback(() => {
    //   handleSelectAnswer(null);
    setUserAnswers((prevAnswers) => [...prevAnswers, null]);
  }, []); //handleSelectAnswer

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      {/* whenever it changes on a component even that component is not part of a list, whenever it changes it will destroy the old list and create a new one 
        NOTE: key is a default attribute for any component it is not used as props*/}
      <Questions
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
