import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

// style
import './index.scss';

// Recoil
import {useRecoilState} from 'recoil';
import {incorrectQuizState, quizListState} from '../../common/recoil/atom';

// Common
import {ROUTE} from "../../common/routes";

// Components
import {Button} from "../../components/Button";

// Assets
import IC_CORRECT from '../../assets/icon/icon-correct.png';
import IC_INCORRECT from '../../assets/icon/icon_incorrect.png';

export const Quiz = () => {
  const navigate = useNavigate();

  // 퀴즈 목록
  const [quizList, setQuizList] = useRecoilState(quizListState);
  // 틀린 문제
  const [incorrectQuiz, setIncorrectQuiz] = useRecoilState(incorrectQuizState);
  // 퀴즈 진행 상황
  const [processNum, setProcessNum] = useState(1);
  // 다음 문제 visible 여부
  const [isVisible, setIsVisible] = useState(false);
  // 정답 여부
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (quizList) {
      if (quizList.length < 1) {
        navigate(ROUTE.MAIN);
      }

      console.log(quizList);
    }
  }, [quizList]);

  /**
   * 보기 클릭시 이벤트
   */
  const clickOptionEvent = (item) => {
    let tempState = JSON.parse(JSON.stringify(incorrectQuiz));
    // 정답 여부 체크
    if (item !== quizList[0].correct_answer) {
      tempState.push(quizList[0]);
      setIsCorrect(false);
    } else setIsCorrect(true);
    setIncorrectQuiz(tempState);
    setIsVisible(true);

    console.log("=========== tempState")
    console.log(tempState)

  }

  /**
   * 다음 문제 버튼 클릭 이벤트
   */
  const clickNextBtn = () => {

    console.log('--')
    let tempList = JSON.parse(JSON.stringify(quizList));
    tempList.shift();
    setQuizList(tempList);

    setProcessNum(processNum + 1);
    setIsVisible(false);
  }

  /**
   * 결과 보기 버튼 클릭 이벤트
   */
  const clickResultBtn = () => {
    navigate(ROUTE.RESULT);
  }


  return (
    quizList.length > 0 ?
      <div className={'quizContent'}>

        <div>{processNum}번째 퀴즈!</div>

        <div>
          <div className={'quizQuestion'}>
            Q. {quizList[0].question}
          </div>

          <div className={'quizOptions'}>
            {isVisible ?
              <div className={'resultContent'}>
                <img src={isCorrect ? IC_CORRECT : IC_INCORRECT} alt={'IS_CORRECT'}/>
              </div> : ''}
            {(quizList[0]['optionList'] || []).map((item, index) => {
              return (
                <div className={'optionItem'} key={index}>
                  <div onClick={() => {
                    clickOptionEvent(item)
                  }}>{item}</div>
                </div>
              )
            })}
          </div>
          <div>
            {isVisible ? quizList.length === 1  ? <Button type={'result'} text={'결과 보기'} clickEvent={clickResultBtn}></Button> : <Button text={'다음 문제'} clickEvent={clickNextBtn}></Button> : ''}
          </div>
        </div>
      </div> : ''
  );
};
