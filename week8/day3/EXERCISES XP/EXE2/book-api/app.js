

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());


const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
