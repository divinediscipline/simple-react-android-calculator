import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>

          <div className="show-case">
            <div>placeholder </div>
            <div> place2</div>
          </div>
          <div className="board">
            <div className="board__nums">
                <div className="board__num top-nums">7</div>
                <div className="board__num top-nums">8</div>
                <div className="board__num top-nums">9</div>
                <div className="board__num">4</div>
                <div className="board__num">5</div>
                <div className="board__num">6</div>
                <div className="board__num">1</div>
                <div className="board__num">2</div>
                <div className="board__num">3</div>
                <div className="board__num">.</div>
                <div className="board__num">0</div>
                <div className="board__num equal-sign">=</div>
            </div>
            <div className="board__signs">
                <div className="board__sign">DEL</div>
                <div className="board__sign symbol">÷</div>
                <div className="board__sign symbol">×</div>
                <div className="board__sign symbol">-</div>
                <div className="board__sign symbol">+</div>
            </div>

            <div className="board__emptys">
                <div className="board__empty"> </div>
                <div className="board__empty"> </div>
                <div className="board__empty"> </div>
                <div className="board__empty"> </div>
                <div className="board__empty"> </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
