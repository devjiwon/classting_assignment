import {atom} from "recoil";

export const quizListState = atom({
  key: 'quizList',
  default: [],
});

export const incorrectQuizState = atom({
  key: 'incorrectQuiz',
  default: [],
});
