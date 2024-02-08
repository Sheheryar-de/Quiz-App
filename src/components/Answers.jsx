import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  //this is to shuffle the answers so they dont come in the same order
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <>
      <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
          const isSelected = selectedAnswer === answer;

          let cssClass = "";

          if (answerState === "answered" && isSelected) {
            cssClass = "selected";
          }

          if (
            answerState === "correct" ||
            (answerState === "wrong" && isSelected)
          ) {
            cssClass = answerState;
          }

          return (
            <li key={answer} className="answer">
              <button
                className={cssClass}
                onClick={() => onSelect(answer)}
                disabled={answerState !== ""}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
