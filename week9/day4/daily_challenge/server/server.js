const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors({
    origin: 'http://localhost:3000'
}));


app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
    const message = req.body;
    res.send(`I received your POST request. This is what you sent me: ${message}`);
    console.log (message);
});

app.listen (port, () => {
    console.log(`Server running on port 5000`);
});
