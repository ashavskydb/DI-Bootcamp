import React from 'react';
import ReactDOM from 'react-dom';
import CharacterCounter from './components/CharacterCounter';
import './App.css'

function App() {

  return (
    <div className='App'>
      <h1>Character Counter</h1>
      <CharacterCounter />
    </div>
      
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

