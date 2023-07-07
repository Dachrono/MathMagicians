import PropTypes from 'prop-types';
import './Buttons.css';

function Buttons({ handleClick }) {
  return (
    <>
      <div className="panel">
        <button className="btn" onClick={() => handleClick('AC')} id="AC" type="button">AC</button>
        <button className="btn" onClick={() => handleClick('+/-')} id="+/-" type="button">+/-</button>
        <button className="btn" onClick={() => handleClick('%')} id="%" type="button">%</button>
        <button className="btn" onClick={() => handleClick('÷')} id="div" type="button">/</button>
        <button className="btn" onClick={() => handleClick('7')} id="7" type="button">7</button>
        <button className="btn" onClick={() => handleClick('8')} id="8" type="button">8</button>
        <button className="btn" onClick={() => handleClick('9')} id="9" type="button">9</button>
        <button className="btn" onClick={() => handleClick('x')} id="mul" type="button">x</button>
        <button className="btn" onClick={() => handleClick('4')} id="4" type="button">4</button>
        <button className="btn" onClick={() => handleClick('5')} id="5" type="button">5</button>
        <button className="btn" onClick={() => handleClick('6')} id="6" type="button">6</button>
        <button className="btn" onClick={() => handleClick('-')} id="res" type="button">-</button>
        <button className="btn" onClick={() => handleClick('1')} id="1" type="button">1</button>
        <button className="btn" onClick={() => handleClick('2')} id="2" type="button">2</button>
        <button className="btn" onClick={() => handleClick('3')} id="3" type="button">3</button>
        <button className="btn" onClick={() => handleClick('+')} id="sum" type="button">+</button>
        <button className="btn" onClick={() => handleClick('0')} id="zero" type="button">0</button>
        <button className="btn" onClick={() => handleClick('.')} id="." type="button">.</button>
        <button className="btn" onClick={() => handleClick('=')} id="equal" type="button">=</button>
      </div>
    </>
  );
}

Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Buttons;
