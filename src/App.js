import React from 'react';
import './App.css';

function Button({symbol, onClick}) {
  return (
    <div className="button" onClick={onClick}>
      {symbol || ''}
    </div>
  );
}

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {screen: '', operatorClicked: true};
  }
  handleNumberClick (n) {
    this.setState ({
      screen: this.state.screen + n,
      operatorClicked: false,
    });
  }
  handleOperatorClick (o) {
    if (o === '=') {
      this.setState ({
        screen: eval (this.state.screen),
        operatorClicked: false,
      });
    } else if (this.state.operatorClicked) {
      return this.setState (this.state);
    } else {
      this.setState ({
        screen: this.state.screen + o,
        operatorClicked: true,
      });
    }
  }
  render () {
    let renderNumber = n => (
      <Button symbol={n} onClick={_e => this.handleNumberClick (n)} />
    );
    let renderOperator = o => (
      <Button symbol={o} onClick={_e => this.handleOperatorClick (o)} />
    );
    return (
      <div className="calculator">
        <div className="screen">
          {this.state.screen}
        </div>
        <div className="buttons">
          <div className="numbers">
            <div className="row">
              {renderNumber ('1')}
              {renderNumber ('2')}
              {renderNumber ('3')}
            </div>
            <div className="row">
              {renderNumber ('4')}
              {renderNumber ('5')}
              {renderNumber ('6')}
            </div>
            <div className="row">
              {renderNumber ('7')}
              {renderNumber ('8')}
              {renderNumber ('9')}
            </div>
            <div className="row">
              {renderNumber ('0')}
            </div>
          </div>
          <div className="operators">
            {renderOperator ('+')}
            {renderOperator ('/')}
            {renderOperator ('*')}
            {renderOperator ('=')}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
