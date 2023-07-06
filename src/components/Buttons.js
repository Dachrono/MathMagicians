import './Buttons.css';

function Buttons() {
  return (
    <>
      <div className="panel">
        <button className="btn" id="AC" type="button">AC</button>
        <button className="btn" id="+/-" type="button">+/-</button>
        <button className="btn" id="%" type="button">%</button>
        <button className="btn" id="div" type="button">/</button>
        <button className="btn" id="7" type="button">7</button>
        <button className="btn" id="8" type="button">8</button>
        <button className="btn" id="9" type="button">9</button>
        <button className="btn" id="mul" type="button">x</button>
        <button className="btn" id="4" type="button">4</button>
        <button className="btn" id="5" type="button">5</button>
        <button className="btn" id="6" type="button">6</button>
        <button className="btn" id="res" type="button">-</button>
        <button className="btn" id="1" type="button">1</button>
        <button className="btn" id="2" type="button">2</button>
        <button className="btn" id="3" type="button">3</button>
        <button className="btn" id="sum" type="button">+</button>
        <button className="btn" id="zero" type="button">0</button>
        <button className="btn" id="." type="button">.</button>
        <button className="btn" id="equal" type="button">=</button>
      </div>
    </>
  );
}

export default Buttons;
