import React, {useState} from 'react';

function Events() {
    const [inputValue, setInputValue] = useState(''); 
    const [isToggleOn, setIsToggleOn] = useState(true);

    const clickMe = () =>{
        alert("I was clicked");
     };
    
     const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`You entered: ${inputValue}`);
            event.preventDefault(); 
        }
    };

    const toggleButton = () => {
        setIsToggleOn(!isToggleOn); 
    };

    return (
        <div>
        <button onClick={clickMe}>Click Me</button>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
        />
         <button onClick={toggleButton}>
                {isToggleOn ? 'ON' : 'OFF'}
        </button>
     </div>
    );
}

export default Events;  