import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const vote = (languageName) => {
    setLanguages(languages.map(language =>
      language.name === languageName ? { ...language, votes: language.votes + 1 } : language
    ));
  };

  return (
    <div className="languages">
      <h1>Vote Your Language!</h1>
      {languages.map((language, index) => (
        <div className="language" key={index}>
          <div className="voteCount">{language.votes}</div>
          {language.name} <button onClick={() => vote(language.name)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;
