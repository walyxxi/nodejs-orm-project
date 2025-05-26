const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const { connectToDatabase } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
connectToDatabase();

// Routes
app.use('/api', routes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});