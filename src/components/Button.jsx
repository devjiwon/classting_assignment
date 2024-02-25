import React, {useEffect, useState} from "react";

// Style
import './style/Button.scss';

export const Button = (props) => {
  const {text, type, clickEvent} = props;

  return (
    <button className={`button ${type}`} onClick={() => clickEvent()}>{text}</button>
  );
};
