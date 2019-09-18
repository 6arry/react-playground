const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    const port = process.env.PORT || 6000;

    app.listen(port, () => console.log(`Server Started on port ${port}`));
