import React, { useRef, useState } from 'react';


function CharacterCounter() {
    const inputRef = useRef(null);
    const [characterCount, setCharacterCount] = useState(0);

    const handleInputChange = () => {
        const textLenght = inputRef.current.value.length;
        setCharacterCount(textLenght);
       
    };

    return (
        <div>
            <textarea
                ref={inputRef}
                onChange={handleInputChange}
                placeholder="Type something..."></textarea>
            <p>Character Count: {characterCount}</p>
        </div>
    );
}

export default CharacterCounter;
