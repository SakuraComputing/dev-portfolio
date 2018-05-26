const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const profile = require('./routes/api/profile');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo DB through mongoose
mongoose
    .connect(db)
    .then(() => console.log('Mongo DB connected'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));