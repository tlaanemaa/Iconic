"use client";

import { useState, useEffect } from "react";
import { selectRandom, wait } from "./utils";
import { questions } from "./questions";

const defaultQuestionTime = 15;
const defaultAnswerTime = 5;
let iteration = 0;

export default function Game() {
  const [mode, setMode] = useState<"Q" | "A">("Q");
  const [question, setQuestion] = useState(questions[0]);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const ac = new AbortController();
    const runQaLoop = async (): Promise<void> => {
      setMode("Q");
      iteration = (iteration + 1) % questions.length;
      const question = questions[iteration];
      setQuestion(question);
      const qTime = (question.questionTime ?? defaultQuestionTime) * 1000;
      const aTime = (question.answerTime ?? defaultAnswerTime) * 1000;

      let qTimeLeft = qTime;
      const tickInterval = 1000;
      const interval = setInterval(() => {
        qTimeLeft -= tickInterval;
        setTimeLeft(qTimeLeft);
      }, tickInterval);
      try {
        await wait(qTime, ac);
      } catch (e) {
        throw e;
      } finally {
        clearInterval(interval);
      }

      setMode("A");
      await wait(aTime, ac);

      return runQaLoop();
    };

    runQaLoop();

    return () => ac.abort("Unmount");
  }, []);

  const secondsLeft = Math.round(timeLeft / 1000);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between overflow-hidden">
      <div className="fixed bottom-0 right-0 h-40 w-40 text-8xl animate-ping font-black text-accent-color">
        {secondsLeft || ""}
      </div>
      <div className="flex grow basis-1/3 w-screen text-5xl items-center justify-center text-center bg-secondary-color text-accent-color">
        <p>{mode === "Q" ? question.question : question.answer}</p>
      </div>
      <div className="flex grow basis-2/3 w-screen text-7xl items-center justify-center text-center bg-primary-color text-accent-color">
        <p className="animate-bounce">{question.riddle}</p>
      </div>
    </div>
  );
}
