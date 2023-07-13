import './quotePage.css';
import NavBar from '../components/navBar';
import Quote from '../components/quote';

function QuotePage() {
  return (
    <div className="containerQuote">
      <NavBar />
      <div className="itemsQuote">
        <Quote />
      </div>
    </div>
  );
}

export default QuotePage;
