interface Question {
  question: string;
  questionTimeMs?: number;
  riddle: string;
  answer: string;
  answerTimeMs?: number;
}

////////////////////////////////////////////////////////////////////

export const questions: Question[] = [
  {
    question: "What kind of fooood is this?",
    riddle: "🥘 + 🎂",
    answer: "Pancake",
  },
  {
    question: "What kind of drink is this?",
    riddle: "🥘 + 🎩",
    answer: "Panhat",
  },
];
