import React from 'react';

import './CalcScreen.css';

const calcScreen = (props) => {
  return (
    
    <div className="calc-screen">
      <div className="calc-screen__input">{props.input} </div>
      <div className="calc-screen__result"> {props.calculatedResult}</div>
    </div>

  )
};

export default calcScreen;