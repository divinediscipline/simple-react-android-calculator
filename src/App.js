import React, { Component } from 'react';

import './App.css';
import Board from './Board/Board';
import CalcScreen from './CalcScreen/CalcScreen';

class App extends Component {

  state = {
    screenInputs: [
    ],
    resultContainer: '',
  }

  showInput = (event) => {
    const calcOperators = ['+', '-', '/', '*'];
    let calculatedResult;

    let newScreenInputs = [...this.state.screenInputs];
    newScreenInputs.push(event.target.innerHTML);

    let stringInputs = newScreenInputs.join('')

    if (stringInputs.includes('÷')) {
      stringInputs = stringInputs.split('÷').join('/');
    }
    if (stringInputs.includes('×')) {
      stringInputs = stringInputs.split('×').join('*');
    }
    console.log('string inputs are ' + stringInputs);
    try {
      for (let i = 0; i < calcOperators.length; i++) {
        if (stringInputs.indexOf(calcOperators[i]) !== -1) {
          calculatedResult = eval(stringInputs);
          console.log(calculatedResult);
        }

      }
    }
    catch (e) {
      // console.log('not possible');
    }

    this.setState({
      screenInputs: newScreenInputs,
      resultContainer: calculatedResult
    });
    console.log(event.target.innerHTML);

  }

  deleteInput = () => {
    let newScreenInputs = [...this.state.screenInputs];
    newScreenInputs.pop();
    this.setState({
      screenInputs: newScreenInputs
    });
  }

  // calculate = () => {
  //   let newScreenInputs = [...this.state.screenInputs];

  // }
  render() {
    return (
      <div className="App">
        <CalcScreen input={this.state.screenInputs} calculatedResult={this.state.resultContainer} />
        <Board click={this.showInput} del={this.deleteInput} />
      </div>
    );
  }
}

export default App;
