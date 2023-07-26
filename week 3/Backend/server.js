const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

mongoose.connect('mongodb+srv://prathm8552:Prathm%40123@cluster0.w7hbusb.mongodb.net/?retryWrites=true&w=majority', 
{ //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database')); 
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const quoteRouter = require('./routes/quote');
app.use('/quote', quoteRouter);
app.use('/', (req, res) => {
    res.send('Hello World');
})


app.listen(5050, () => console.log('Server started on port 5050'));
