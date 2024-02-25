import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

// style
import './index.scss';

// Recoil
import {useRecoilState} from 'recoil';
import {incorrectQuizState, quizListState} from '../../common/recoil/atom';
import {ROUTE} from "../../common/routes";

export const Quiz = () => {
  const navigate = useNavigate();
  // 퀴즈 목록
  const [quizList, setQuizList] = useRecoilState(quizListState);
  // 틀린 문제
  const [incorrectQuiz, setIncorrectQuiz] = useRecoilState(incorrectQuizState);

  useEffect(() => {
    if(quizList) {
      if(quizList.length < 1) {
        navigate(ROUTE.MAIN);
      }
      console.log(quizList)
    }
  }, [quizList])

  return (
    <div className={'main'}>

    </div>
  );
};
