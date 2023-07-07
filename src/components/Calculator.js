import { useState } from 'react';
import './Calculator.css';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcRes, setOper] = useState({});
  const handleClick = (butName) => {
    const result = calculate(calcRes, butName);
    setOper(result);
  };

  return (
    <div className="calc">
      <div className="result">
        <span>
          { (JSON.stringify(calcRes) === '{}') ? '0' : null }
          {calcRes.total || ''}
          {calcRes.operation || ''}
          {calcRes.next || ''}

        </span>
      </div>
      <Buttons handleClick={handleClick} />
    </div>
  );
}

export default Calculator;
