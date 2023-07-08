import './quote.css';
import { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(false);

  const getQuote = async () => {
    const header = {
      'X-Api-Key': 'Vm6ia/wNgoTh9/qxQLj/Gg==BwWcWYV2d97bnWwv',
      'Content-type': 'application/json',
    };

    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=fear', { headers: header });
      const data = await response.json();
      setQuote(data);
      setIsLoaded(false);
    } catch {
      setError(true);
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  if (isLoaded) {
    return <div className="quote">Loading...</div>;
  }

  if (error) {
    return <div className="quote">Error</div>;
  }

  return (
    <div className="quote">
      <h3>
        {quote[0]?.quote}
        {' - - '}
        {quote[0]?.author}
        {' - - '}
      </h3>
    </div>
  );
}

export default Quote;
