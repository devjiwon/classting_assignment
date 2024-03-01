import {atom} from "recoil";

export const quizListState = atom({
  key: 'quizList',
  default: [],
});

export const incorrectQuizState = atom({
  key: 'incorrectQuiz',
  default: [],
});

export const timerState = atom({
  key: 'timer',
  default: 0,
});
