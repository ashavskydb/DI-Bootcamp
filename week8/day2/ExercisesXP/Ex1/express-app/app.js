const express = require('express');
const app = express();
const router = require('./routes/index.js');


const port = process.env.PORT || 3000;

app.use('/', router);

// app.get('/', (req, res) => {
//     res.send('Welcome to our Home Page!');
// });

// app.get('/about', (req, res) => {
//     res.send('About Us');
// });

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

