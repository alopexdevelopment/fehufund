const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const contactRoutes = require('./routes/contact');

app.use('/contact', contactRoutes);

app.listen(port, () => {
    console.log(`Server is running on ${ port }`);
});