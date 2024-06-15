interface Question {
  question: string;
  /**
   * Time the question is kept on the screen, in seconds
   */
  questionTime?: number;
  /**
   * The emoji question that is asked
   */
  riddle: string;
  /**
   * The answer to that question
   */
  answer: string;
  /**
   * Time the answer is kept on the screen, in seconds
   */
  answerTime?: number; // Seconds
}

////////////////////////////////////////////////////////////////////
// Buttons:
// ctrl + C = Copy
// ctrl + V = Paste
// ctrl + Z = Undo
// ctrl + Y = Redo
// start + . = Emoji
// alt + shift + F = Make pretty

export const questions: Question[] = [
  {
    question: "What kind of food is this?",
    riddle: "🥘 + 🎂",
    answer: "Pancake",
    questionTime: 15,
  },
  {
    question: "What kind of drink is this?",
    riddle: "🍓 + 🥛 + 🤝",
    answer: "Strawberry milkshake",
  },
  {
    question: "What kind of food is this?",
    riddle: "🍰 + 🥳",
    answer: "Birthday cake",
  },
  {
    question: "What kind of person is this?",
    riddle: "👩‍💻 + 💻",
    answer: "Youtuber",
  },
  {
    question: "What kind of game is this",
    riddle: "🔫 + 🎮",
    answer: "Fortnite",
  },
  {
    question: "What kind of food is this?",
    riddle: "🥮 + 🥤",
    answer: "Cupcake",
  },
  {
    question: "What kind of season is this?",
    riddle: "🌅 + 😅",
    answer: "Summer",
  },
  {
    question: "What kind of event is this?",
    riddle: "🎃 + 🧛‍♀️",
    answer: "Halloween",
  },
  {
    question: "What kind of event is this?",
    riddle: "🎅 + 🎁",
    answer: "Christmas",
  },
  {
    question: "What kind of sport is this?",
    riddle: " ⚽+ 👩‍💼",
    answer: "Fotboll",
  },
];
