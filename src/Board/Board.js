import React from 'react';

import './Board.css';


const board = (props) => {
    return (
        <div className="board">
            <div className="board__nums">
                <div className="board__num top-nums" onClick={props.click}>7</div>
                <div className="board__num top-nums" onClick={props.click}>8</div>
                <div className="board__num top-nums" onClick={props.click}>9</div>
                <div className="board__num" onClick={props.click}>4</div>
                <div className="board__num" onClick={props.click}>5</div>
                <div className="board__num" onClick={props.click}>6</div>
                <div className="board__num" onClick={props.click}>1</div>
                <div className="board__num" onClick={props.click}>2</div>
                <div className="board__num" onClick={props.click}>3</div>
                <div className="board__num" onClick={props.click}>.</div>
                <div className="board__num" onClick={props.click}>0</div>
                <div className="board__num equal-sign">=</div>
            </div>
            <div className="board__signs">
                <div className="board__sign" onClick={props.del}>DEL</div>
                <div className="board__sign symbol" onClick={props.click}>÷</div>
                <div className="board__sign symbol" onClick={props.click}>×</div>
                <div className="board__sign symbol" onClick={props.click}>-</div>
                <div className="board__sign symbol" onClick={props.click}>+</div>
            </div>

            <div className="board__emptys">
                <div className="board__empty"> </div>
                <div className="board__empty"> </div>
                <div className="board__empty"> </div>
                <div className="board__empty"> </div>
            </div>
                <div className="board__empty"> </div>
        </div>
    )
};

export default board;