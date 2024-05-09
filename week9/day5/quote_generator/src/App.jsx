import React, { useState, useEffect } from 'react';
import quotes from './Components/QuotesDatabase';
import './App.css';

function App() {
  const [quoteData, setQuoteData] = useState({
    quote: quotes[0].quote,
    author: quotes[0].author
  });

  const randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  };

  const shuffleQuotes = (array) => array.sort(() => Math.random() - 0.5);

  const handleClick = () => {
    const generateRandomQuote = randomQuote();
    setQuoteData({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    shuffleQuotes(quotes);
  };

  const randomColor = () => `rgb(
    ${Math.floor(Math.random() * 155)},
    ${Math.floor(Math.random() * 155)},
    ${Math.floor(Math.random() * 155)})`;

  useEffect(() => {
    const html = document.documentElement;
    const newColor = randomColor(); 
    html.style.backgroundColor = newColor; 
  }, [quoteData]); 

  return (
    <div style={{
      height: 'auto',
      width: '100%',
      border: '1px solid rgb(145, 126, 126)',
      borderRadius: '10px',
      textAlign: 'center',
      maxWidth: '35rem',
      margin: '100px auto',
      backgroundColor: "white",
      padding: "20px"
    }}>
      <div className="fadeIn" key={Math.random()} style={{ color: randomColor() }}>
        <h1 id="quote">"{quoteData.quote}"</h1>
        <h5 id="author">-{quoteData.author ? quoteData.author : "Unknown"}-</h5>
      </div>
      <button
        style={{ backgroundColor: randomColor(), color: '#FFF', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
        id="newquote"
        onClick={handleClick}
      >
        New quote
      </button>
    </div>
  );
}

export default App;