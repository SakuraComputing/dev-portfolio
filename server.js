const express = require('express');
const mongoose = require('mongoose');

const profile = require('./routes/api/profile');

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo DB through mongoose
mongoose
    .connect(db)
    .then(() => console.log('Mongo DB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

// Use routes
app.use('/api/profiles', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));