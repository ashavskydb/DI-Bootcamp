import React, {useState, useEffect} from "react";

function Color () {
    const [favoriteColor, setFavoriteColor] = useState('red');

    
    useEffect(() => {
        alert('useEffect reached');
      });
    
      const handleChangeColor = () => {
        setFavoriteColor('blue');
      };
    
    return (
        <div>
           <h1>{favoriteColor}</h1>
      <button onClick={handleChangeColor}>Change color to blue</button>
        </div>
    );
}

export default Color;

