import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {BeatLoader} from "react-spinners";
import axios, {isAxiosError} from "axios";

// components
import {Button} from '../../components/Button';

// style
import './index.scss';

// common
import {ROUTE} from "../../common/routes";

// Recoil
import {useRecoilState} from 'recoil';
import {quizListState} from '../../common/recoil/atom';

export const Main = () => {
  const navigate = useNavigate();
  // 로딩
  const [loading, setLoading] = useState(false);
  // 퀴즈 목록
  const [quizList, setQuizList] = useRecoilState(quizListState);

  /**
   * 퀴즈 목록 API 호출
   */
  const getQuizList = () => {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then((response) => {
        setLoading(false);
        setQuizList(response.data.results)
        navigate(ROUTE.QUIZ);
      })
      .catch((error) => {
        if(isAxiosError(error) && error.response && error.message) {
          setLoading(false);
        }
      });
  }

  /**
   * 버튼 클릭 이벤트
   */
  const clickQuizBtn = () => {
    setLoading(true);
    getQuizList();
  }

  return (
    <div className={'main'}>
      {loading ? <BeatLoader color="#36d7b7" /> :
      <Button clickEvent={clickQuizBtn} type={'quiz'} text={'퀴즈 풀기'}></Button>}
    </div>
  );
};
