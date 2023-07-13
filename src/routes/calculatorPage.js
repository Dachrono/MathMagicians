import './calcuatorPage.css';
import NavBar from '../components/navBar';
import Calculator from '../components/Calculator';

function CalculatorPage() {
  return (
    <div className="containerCalculator">
      <NavBar />
      <div className="itemsCalc">
        <h2 className="titleCalc">Lets do some math!</h2>
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
