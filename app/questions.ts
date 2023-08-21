interface Question {
  question: string;
  /**
   * Time the question is kept on the screen, in seconds
   */
  questionTime?: number;
  riddle: string;
  answer: string;
  /**
   * Time the answer is kept on the screen, in seconds
   */
  answerTime?: number; // Seconds
}

////////////////////////////////////////////////////////////////////

export const questions: Question[] = [
  {
    question: "What kind of fooood is this?",
    riddle: "🥘 + 🎂",
    answer: "Pancake",
    questionTime: 20,
  },
  {
    question: "What kind of drink is this?",
    riddle: "🥘 + 🎩",
    answer: "Panhat",
  },
];
