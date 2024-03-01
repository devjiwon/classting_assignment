import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Chart from "react-apexcharts";

// components
import {Button} from '../../components/Button';

// style
import './index.scss';

// Recoil
import {useRecoilState} from "recoil";
import {incorrectQuizState} from "../../common/recoil/atom";

export const Result = () => {
  const navigate = useNavigate();
  // 틀린 문제
  const [incorrectQuiz, setIncorrectQuiz] = useRecoilState(incorrectQuizState);
  const [options, setOptions] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['맞은 문제', '틀린 문제']
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40]
      }
    ]
  });

  useEffect(() => {
    if(incorrectQuiz) {
      let tempState = JSON.parse(JSON.stringify(options));
      options['series'] = [
        {
          name: "series-1",
          data: [10 - incorrectQuiz.length, incorrectQuiz.length]
        }
      ]
      setOptions(tempState);
    }
  }, [incorrectQuiz]);

  /**
   * 버튼 클릭 이벤트
   */
  const clickQuizBtn = () => {
    navigate('/');
  }

  return (
    <div className={'resultContainer'}>

      <div>
        Result !!
      </div>
      <div>
        총 걸린 시간:
      </div>
      <div>
        맞은 문제: {10 - incorrectQuiz.length}개
        틀린 문제: {incorrectQuiz.length}개
      </div>
      <div className={'chartContent'}>
        <Chart options={options.options} series={options.series} type="bar" width={380}/>
      </div>

      <div>
        틀린 문제 다시보기
      </div>
      <Button clickEvent={clickQuizBtn} type={'quiz'} text={'다시 퀴즈 풀러가기'}></Button>
    </div>
  );
};
