import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  //this is used to set timer for answering a question that after the specified time it will display new question if not answered
  useEffect(() => {
    console.log("setting timeout");
    const timer = setTimeout(() => {
      onTimeOut();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  // here we are updating remaining time after every 100 miliseconds
  useEffect(() => {
    console.log("setting interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={mode}
      />
    </>
  );
}
