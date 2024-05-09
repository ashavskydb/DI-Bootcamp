import React from 'react';

function App() {
  const sendData = async () => {
    const url = 'https://webhook.site/3ed5c2c3-c26f-43e6-a004-e1877d816cde'; 
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json(); 
      console.log('Response:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={sendData}>Press me to post some data</button>
    </div>
  );
}

export default App;
