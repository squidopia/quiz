"use strict";

const STORAGE_KEY = "percentme.quizzes.v1";
const CURRENT_KEY = "percentme.currentQuizId.v1";

const sampleQuiz = {
  id: "sample-global-cosmic",
  title: "How Cosmic Are You?",
  target: "cosmic",
  description: "A playful personality meter for anyone, anywhere. Pick the answer that feels most like you.",
  language: "English",
  region: "Global",
  tags: ["personality", "friends", "culture"],
  plays: 128,
  updatedAt: new Date().toISOString(),
  questions: [
    {
      text: "Your group trip loses its plan. What do you do first?",
      answers: [
        { text: "Make a new plan in five minutes", weight: 62 },
        { text: "Ask everyone what would feel fun now", weight: 82 },
        { text: "Wander toward the best-looking street", weight: 96 },
        { text: "Find food and reset the mood", weight: 74 }
      ]
    },
    {
      text: "Which object would you keep on your desk?",
      answers: [
        { text: "A tiny globe", weight: 80 },
        { text: "A notebook full of impossible ideas", weight: 92 },
        { text: "A perfectly labeled calendar", weight: 45 },
        { text: "A strange rock from a beach", weight: 88 }
      ]
    },
    {
      text: "When you learn something new, you usually want to...",
      answers: [
        { text: "Test it immediately", weight: 72 },
        { text: "Connect it to ten other ideas", weight: 95 },
        { text: "Teach it to someone", weight: 79 },
        { text: "Save it for exactly when it is useful", weight: 58 }
      ]
    },
    {
      text: "Pick a weekend signal.",
      answers: [
        { text: "Live music in a new city", weight: 90 },
        { text: "A quiet room and a long book", weight: 70 },
        { text: "A packed schedule with friends", weight: 66 },
        { text: "No plan, just weather and instinct", weight: 100 }
      ]
    }
  ]
};

const seedQuizzes = [
  sampleQuiz,
  {
    id: "sample-night-owl",
    title: "How Night Owl Are You?",
    target: "night owl",
    description: "A quick rhythm check for people who come alive after sunset.",
    language: "English",
    region: "Global",
    tags: ["lifestyle", "routine", "friends"],
    plays: 94,
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    questions: [
      {
        text: "Your best idea usually appears...",
        answers: [
          { text: "Before breakfast", weight: 12 },
          { text: "During a focused afternoon", weight: 48 },
          { text: "Right when everyone else gets sleepy", weight: 96 }
        ]
      },
      {
        text: "A perfect evening has...",
        answers: [
          { text: "An early reset", weight: 20 },
          { text: "One calm plan", weight: 55 },
          { text: "A second wind and no hard stop", weight: 100 }
        ]
      }
    ]
  },
  {
    id: "sample-main-character",
    title: "How Main Character Are You?",
    target: "main character",
    description: "A cinematic confidence meter for dramatic entrances and bold choices.",
    language: "English",
    region: "Global",
    tags: ["personality", "social", "fun"],
    plays: 173,
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
    questions: [
      {
        text: "You walk into a room and notice...",
        answers: [
