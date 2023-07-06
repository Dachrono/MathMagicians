import './Calculator.css';
import Buttons from './Buttons';

function Calculator() {
  return (
    <div className="calc">
      <div className="result">
        <span>0</span>
      </div>
      <Buttons />
    </div>
  );
}

export default Calculator;
