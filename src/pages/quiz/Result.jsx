import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios, {isAxiosError} from "axios";

// components
import {Button} from '../../components/Button';

// style
import './index.scss';

export const Result = () => {
  const history = useNavigate();


  /**
   * 버튼 클릭 이벤트
   */
  const clickQuizBtn = () => {
    console.log("--")
    history('/');
  }

  return (
    <div className={'main'}>
      Result
      <Button clickEvent={clickQuizBtn} type={'quiz'} text={'퀴즈 풀기'}></Button>
    </div>
  );
};
